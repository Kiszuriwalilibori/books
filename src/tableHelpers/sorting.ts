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

const getValueWithFallback = (item: any, key: string): string => {
    const value = getValue(item, key);

    // If sorting by optional fields and the field is empty, fall back to authors
    // Don't fall back when sorting by authors itself or title (required fields)
    if (!value && key !== "authors" && key !== "title" && key !== "id") {
        return getValue(item, "authors");
    }

    return value;
};

const hasValue = (item: any, key: string): boolean => {
    const value = getValue(item, key);
    return !!value;
};

export const sorting = (data: BooksState["books"], isSortOrderDescending: BooksState["sort"]["isSortOrderDescending"], key: NonNullable<BooksState["sort"]["currentSortColumn"]>) => {
    if (!key) return data;
    try {
        if (key) {
            const numericalKey = columns.sourceFields.indexOf(key as Exclude<AllFields, "subject">);
            const trim = trimFunctions[columns.contentCategories[numericalKey] as ContentCategoryEnum];

            data.sort((a, b) => {
                // For optional fields that might be empty, handle empty values specially
                if (key !== "authors" && key !== "title" && key !== "id") {
                    const aHasValue = hasValue(a, key);
                    const bHasValue = hasValue(b, key);

                    // If one has value and other doesn't, prioritize the one with value
                    if (aHasValue && !bHasValue) return -1;
                    if (!aHasValue && bHasValue) return 1;

                    // If both have values or both don't have values, sort normally
                    const aValue = getValueWithFallback(a, key);
                    const bValue = getValueWithFallback(b, key);

                    if (typeof trim === "function") {
                        return trim(aValue).localeCompare(trim(bValue));
                    }

                    return aValue.localeCompare(bValue);
                } else {
                    // For required fields (authors, title, id), use normal sorting
                    // But still handle empty values (like empty arrays) specially
                    const aValue = getValueWithFallback(a, key);
                    const bValue = getValueWithFallback(b, key);

                    // Handle empty values - they should come last even for required fields
                    const aIsEmpty = !aValue;
                    const bIsEmpty = !bValue;

                    if (aIsEmpty && !bIsEmpty) return 1; // a is empty, should come after b
                    if (!aIsEmpty && bIsEmpty) return -1; // b is empty, should come after a

                    if (typeof trim === "function") {
                        return trim(aValue).localeCompare(trim(bValue));
                    }

                    return aValue.localeCompare(bValue);
                }
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
