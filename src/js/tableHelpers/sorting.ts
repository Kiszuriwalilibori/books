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

const sorts = {
    stringAndNumericalStringSortFunction: (data: BooksState["books"], isSortOrderDescending: BooksState["sort"]["isSortOrderDescending"], key: NonNullable<BooksState["sort"]["currentSortColumn"]>, trim: TrimFunction) => {
        data.sort((OneBook, OtherBook) => {
            const trimmedOneBook = trim(OneBook[key] as string);
            const trimmedOtherBook = trim(OtherBook[key] as string);
            if (isSortOrderDescending) {
                if (trimmedOneBook < trimmedOtherBook) {
                    return 1;
                }
                if (trimmedOneBook > trimmedOtherBook) {
                    return -1;
                }

                return 0;
            }
            if (trimmedOneBook < trimmedOtherBook) {
                return -1;
            }
            if (trimmedOneBook > trimmedOtherBook) {
                return 1;
            }

            return 0;
        });
        return data;
    },
};

export const sorting = (data: BooksState["books"], isSortOrderDescending: BooksState["sort"]["isSortOrderDescending"], key: NonNullable<BooksState["sort"]["currentSortColumn"]>) => {
    try {
        if (key) {
            const numericalKey = columns.sourceFields.indexOf(key as Exclude<AllFields, "subject">);
            const trim = trimFunctions[columns.contentCategories[numericalKey] as ContentCategoryEnum];
            data = sorts.stringAndNumericalStringSortFunction(data, isSortOrderDescending, key, trim);
            return data;
        }
    } catch (err) {
        return data;
    } finally {
        return data;
    }
};

export default sorting;
