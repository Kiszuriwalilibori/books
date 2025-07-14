import TextField from "@mui/material/TextField";
import { FieldInputProps } from "formik";
import { Tooltip } from "components";

export type props = FieldInputProps<string> & {
    label: string;
    isDisabled: boolean;
};

const SearchField = (props: props): JSX.Element => {
    const { isDisabled, label, name, ...otherProps } = props;

    return (
        <Tooltip role="tooltip" title="Nie mniej niż dwa znaki w tym jeden alfanumeryczny" placement="top">
            <TextField disabled={isDisabled} aria-label={`input field for ${name} field`} label={label} id={name} size="small" variant="outlined" {...otherProps} />
        </Tooltip>
    );
};

export default SearchField;
