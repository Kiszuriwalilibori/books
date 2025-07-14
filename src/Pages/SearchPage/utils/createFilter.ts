import { SearchFormValues } from "./model";

export const createFilter = (fields: Partial<SearchFormValues>) => {
    console.log(fields);
    if (!fields.keyword) return undefined;
    const filter: any = { ...fields };
    delete filter.keyword;
    for (const property in filter) {
        if (!filter[property]) delete filter[property];
    }
    return filter;
};

export default createFilter;
