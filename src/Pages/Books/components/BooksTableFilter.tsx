import * as React from "react";
import uuid from "react-uuid";
import { useForm } from "react-hook-form";

import { FilterField } from "./components";
import { useFiltersVisibilityContext } from "Contexts";
import { useDispatchAction } from "hooks";
import { columns } from "models";
import { HeaderItems } from "types";

type Filter = {
    [key in HeaderItems as string]: string;
};

const removeEmptyFields = (obj: Filter): Filter => {
    for (const x in obj) {
        if (obj[x] === "") delete obj[x];
    }

    return obj;
};

let BooksTableFilter = () => {
    const { areFiltersVisible } = useFiltersVisibilityContext();
    const { register, getValues } = useForm();
    const { filterBooks } = useDispatchAction();

    return areFiltersVisible ? (
        <tr id="FiltrationArea">
            {columns.headers.map((fieldName, index) => (
                <td key={uuid()}>
                    <FilterField
                        label={"filtruj " + fieldName}
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
    ) : null;
};

export default React.memo(BooksTableFilter);
