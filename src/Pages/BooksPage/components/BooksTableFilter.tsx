import uuid from "react-uuid";
import { useForm } from "react-hook-form";

import { FilterField } from "./components";
import { useFiltersVisibilityContext } from "contexts";
import { useDispatchAction } from "hooks";
import { columns } from "models";
import { ColumnHeaders } from "types";

type Filter = {
    [key in ColumnHeaders as string]: string;
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

    return (
        <tr id="FiltrationArea">
            {columns.headers.map((fieldName, index) => (
                <td key={uuid()}>
                    <FilterField
                        label={"filtruj po " + fieldName}
                        id={fieldName}
                        size="small"
                        variant="outlined"
                        margin="none"
                        {...register(fieldName)}
                        onChange={e => {
                            register(fieldName).onChange(e);

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
