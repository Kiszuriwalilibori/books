import uuid from "react-uuid";
import { useForm } from "react-hook-form";

import { FilterField } from "./components";
import { useDispatchAction } from "hooks";
import { columns } from "models";
import { NotSearchableFields, SearchableFields } from "types";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { areFiltersVisibleSelector } from "store/selectors";

type Filter = {
    [key in SearchableFields | NotSearchableFields as string]: string;
};

const removeEmptyFields = (obj: Filter): Filter => {
    for (const field in obj) {
        if (obj[field] === "") delete obj[field];
    }
    return obj;
};

const BooksTableFilter = () => {
    const areFiltersVisible = useSelector(areFiltersVisibleSelector);
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
