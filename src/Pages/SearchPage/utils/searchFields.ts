import { SearchableFields } from "types";

export enum Placeholders {
    authors = "Autor",
    title = "Tytuł",
    subject = "Etykiety",
}
interface SearchField {
    name: SearchableFields;
    placeholder: string;
}

export const initialSearchFields: Array<SearchField> = [
    { name: SearchableFields.authors, placeholder: Placeholders.authors },
    { name: SearchableFields.title, placeholder: Placeholders.title },
    { name: SearchableFields.subject, placeholder: Placeholders.subject },
];
class SearchFields {
    fields: Array<SearchField>;
    constructor(fields: Array<SearchField>) {
        this.fields = fields;
    }
    getPlaceholder(str: string) {
        const field: SearchField = this.fields.filter((item: SearchField) => item.name === str)[0];

        return field.placeholder;
    }

    get getSearchFieldsWithInitialValues() {
        const result: { [key: string]: string } = {};
        for (let obj in this.fields) {
            result[this.fields[obj].name] = "";
        }
        return result;
    }
    get getFields() {
        return this.fields;
    }
}
const searchFields = new SearchFields(initialSearchFields);

export default searchFields;
