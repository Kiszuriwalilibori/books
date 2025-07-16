import TextField from "@mui/material/TextField";
import { FieldInputProps } from "formik";
import { memo } from "react";
import { Tooltip } from "components";

export interface SearchFieldProps extends FieldInputProps<string> {
    label: string;
    isDisabled: boolean;
}

const SearchField = memo((props: SearchFieldProps): JSX.Element => {
    const { isDisabled, label, name, ...otherProps } = props;

    return (
        <Tooltip role="tooltip" title="Nie mniej niż dwa znaki w tym jeden alfanumeryczny" placement="top">
            <TextField disabled={isDisabled} aria-label={`input field for ${name} field`} label={label} id={name} size="small" variant="outlined" {...otherProps} />
        </Tooltip>
    );
});

SearchField.displayName = "SearchField";

export default SearchField;
