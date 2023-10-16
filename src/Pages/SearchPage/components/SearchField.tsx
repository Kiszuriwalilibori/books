import { MouseEvent } from "react";
import TextField from "@mui/material/TextField";
import { FieldInputProps } from "formik";
import { Tooltip } from "components";

export type props = FieldInputProps<string> & {
    label: string;
    isDisabled: boolean;
};

function mouseEnterHandler(event: MouseEvent<HTMLInputElement>): void {
    const { target } = event;

    (target as HTMLInputElement).focus();
}

const SearchField = (props: props): JSX.Element => {
    const { isDisabled, label, ...otherProps } = props;

    return (
        <Tooltip role="tooltip" title="Nie mniej niż dwa znaki w tym jeden alfanumeryczny" placement="top">
            <TextField disabled={isDisabled} aria-label={`input field for ${props.name} field`} label={label} id={props.name} size="small" variant="outlined" onMouseEnter={mouseEnterHandler} {...otherProps} />
        </Tooltip>
    );
};

export default SearchField;
