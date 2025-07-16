import TextField from "@mui/material/TextField";
import { FieldInputProps } from "formik";
import { memo, useMemo } from "react";
import { Tooltip } from "components";
import { FieldValidationError } from "../utils/model";

export interface SearchFieldProps extends FieldInputProps<string> {
    label: string;
    isDisabled: boolean;
    fieldErrors?: FieldValidationError[];
}

const SearchField = memo((props: SearchFieldProps): JSX.Element => {
    const { isDisabled, label, name, fieldErrors, ...otherProps } = props;

    // Find errors specific to this field
    const currentFieldErrors = useMemo(() => {
        return fieldErrors?.find(error => error.field === name);
    }, [fieldErrors, name]);

    const hasErrors = Boolean(currentFieldErrors && currentFieldErrors.errors.length > 0);

    // Create detailed tooltip content
    const tooltipContent = useMemo(() => {
        let content = "Wymagania:\n• Minimum 2 znaki\n• Co najmniej jedna litera lub cyfra\n• Bez spacji na początku i końcu";

        if (hasErrors) {
            content += `\n\nBłędy w tym polu:\n${currentFieldErrors!.errors.map(error => `• ${error}`).join("\n")}`;
        }

        return content;
    }, [hasErrors, currentFieldErrors]);

    // No helper text - we only show errors in the ValidationAlert

    return (
        <Tooltip role="tooltip" title={tooltipContent} placement="top" arrow>
            <TextField disabled={isDisabled} aria-label={`input field for ${name} field`} label={label} id={name} size="small" variant="outlined" {...otherProps} />
        </Tooltip>
    );
});

SearchField.displayName = "SearchField";

export default SearchField;
