import { ColumnHeaders, SearchableFields, NotSearchableFields } from "types";
import toArray from "./toArray";
// this enum exclusively keeps order of columns in the table
enum Columns {
    title,
    authors,
    language,
    categories,
    subtitle,
    publishedDate,
}

export enum ContentCategoryEnum {
    string,
    numericalString,
}

type Header = {
    [key in Columns]: ColumnHeaders;
};

type contentCategories = {
    [key in Columns]: ContentCategoryEnum;
};

enum Classes {
    small = "header__cell-small",
    large = "header__cell-large",
}

type CellClasses = {
    [key in Columns]: Classes;
};

type sourceFields = {
    [key in Columns]: Exclude<SearchableFields | NotSearchableFields, "subject">;
};

const headers: Header = {
    [Columns.title]: "Tytuł",
    [Columns.authors]: "Autorzy",
    [Columns.language]: "Język",
    [Columns.categories]: "Etykiety",
    [Columns.subtitle]: "Podtytuł",
    [Columns.publishedDate]: "Wydano",
};

const contentCategoriesObject: contentCategories = {
    [Columns.title]: ContentCategoryEnum.string,
    [Columns.authors]: ContentCategoryEnum.string,
    [Columns.language]: ContentCategoryEnum.string,
    [Columns.categories]: ContentCategoryEnum.string,
    [Columns.subtitle]: ContentCategoryEnum.string,
    [Columns.publishedDate]: ContentCategoryEnum.numericalString,
};

const contentCellClassesObject: CellClasses = {
    [Columns.title]: Classes.large,
    [Columns.authors]: Classes.large,
    [Columns.language]: Classes.large,
    [Columns.categories]: Classes.small,
    [Columns.subtitle]: Classes.small,
    [Columns.publishedDate]: Classes.small,
};

const withButtonsObject = {
    [Columns.title]: false,
    [Columns.authors]: false,
    [Columns.language]: true,
    [Columns.categories]: false,
    [Columns.subtitle]: false,
    [Columns.publishedDate]: false,
};

const sourceFieldsObject: sourceFields = {
    [Columns.title]: SearchableFields.title,
    [Columns.authors]: SearchableFields.authors,
    [Columns.language]: NotSearchableFields.language,
    [Columns.categories]: NotSearchableFields.categories,
    [Columns.subtitle]: NotSearchableFields.subtitle,
    [Columns.publishedDate]: NotSearchableFields.publishedDate,
};

export const columns = {
    headers: toArray(headers),
    contentCategories: toArray(contentCategoriesObject),
    classes: toArray(contentCellClassesObject),
    withButtons: toArray(withButtonsObject),
    sourceFields: [...toArray(sourceFieldsObject), NotSearchableFields.id],
    filterFields: [...toArray(sourceFieldsObject)],
};
