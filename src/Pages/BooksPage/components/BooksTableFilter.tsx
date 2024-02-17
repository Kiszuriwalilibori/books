import uuid from "react-uuid";
import { useForm } from "react-hook-form";

import { FilterField } from "./components";
import { useFiltersVisibilityContext } from "contexts";
import { useDispatchAction } from "hooks";
import { columns } from "models";
import { ColumnHeaders, NotSearchableFields, SearchableFields } from "types";

// type Filter = {
//     [key in ColumnHeaders as string]: string;
// };

// const removeEmptyFields = (obj: Filter): Filter => {
//     for (const x in obj) {
//         if (obj[x] === "") delete obj[x];
//     }

//     return obj;
// };

type Filter = {
    [key in SearchableFields | NotSearchableFields as string]: string;
};

const removeEmptyFields = (obj: Filter): Filter => {
    for (const x in obj) {
        if (obj[x] === "") delete obj[x];
    }

    return obj;
};

const BooksTableFilter = () => {
    const { areFiltersVisible } = useFiltersVisibilityContext();
    const { register, getValues } = useForm();
    const { filterBooks } = useDispatchAction();

    if (!areFiltersVisible) return null;
    const { headers, fields: filterFields } = columns;
    return (
        <tr id="FiltrationArea">
            {filterFields.map((fieldName, index) => (
                <td key={uuid()}>
                    <FilterField
                        label={"filtruj po " + headers[index]}
                        id={fieldName}
                        size="small"
                        variant="outlined"
                        margin="none"
                        {...register(fieldName)}
                        onChange={e => {
                            register(fieldName).onChange(e);
                            const x = removeEmptyFields(getValues());

                            filterBooks(removeEmptyFields(getValues()));
                        }}
                        onMouseEnter={e => {
                            const target = e.target as HTMLInputElement;
                            target.focus();
                        }}
                    />
                </td>
            ))}
        </tr>
    );
};

export default BooksTableFilter;
