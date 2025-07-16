import { AllFields, BooksState } from "types";
import { columns, ContentCategoryEnum } from "models/columns";

type TrimFunction = (arg0: string) => string;
type TrimFunctions = {
    [key in ContentCategoryEnum]: TrimFunction;
};

const trimFunctions: TrimFunctions = {
    [ContentCategoryEnum.string]: (str: string) => {
        while (str.charCodeAt(0) <= 64 && str.length > 1) {
            str = str.slice(1);
        }
        return str;
    },

    [ContentCategoryEnum.numericalString]: (str: string) => {
        while (str.charCodeAt(0) < 48 || str.charCodeAt(0) > 57) {
            str = str.slice(1);
        }
        return str;
    },
};

const getValue = (item: any, key: string): string => {
    const value = item[key];
    if (Array.isArray(value)) {
        return value.map(v => (typeof v === "object" ? Object.values(v).join(" ") : v)).join(", ");
    }
    return value ? String(value) : "";
};

export const sorting = (data: BooksState["books"], isSortOrderDescending: BooksState["sort"]["isSortOrderDescending"], key: NonNullable<BooksState["sort"]["currentSortColumn"]>) => {
    if (!key) return data;
    try {
        if (key) {
            const numericalKey = columns.sourceFields.indexOf(key as Exclude<AllFields, "subject">);
            const trim = trimFunctions[columns.contentCategories[numericalKey] as ContentCategoryEnum];

            data.sort((a, b) => {
                const aValue = getValue(a, key);
                const bValue = getValue(b, key);

                if (typeof trim === "function") {
                    return trim(aValue).localeCompare(trim(bValue));
                }

                return aValue.localeCompare(bValue);
            });

            if (isSortOrderDescending) {
                data.reverse();
            }

            return data;
        }
    } catch (err) {
        console.error("Error in sorting function:", err);
    }

    return data;
};

export default sorting;
