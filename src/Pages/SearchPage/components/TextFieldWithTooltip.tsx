import React, { MouseEvent } from 'react';
import TextField  from '@mui/material/TextField';
import { FieldInputProps } from 'formik';
import { Tooltip } from 'components';

export type props = FieldInputProps<string> & {
    label: string;
};

function onTextFieldHover(event: MouseEvent<HTMLInputElement>): void {
    const { target } = event;

    (target as HTMLInputElement).focus();
}

const TextFieldWithTooltip = (props: props): JSX.Element => {
    const { label, ...otherProps } = props;

    return (
        <Tooltip title="Nie mniej niż dwa znaki w tym jeden alfanumeryczny" arrow>
            <TextField
                label={label}
                id={props.name}
                size="small"
                variant="outlined"
                onMouseEnter={onTextFieldHover}
                {...otherProps}
            />
        </Tooltip>
    );
};

export default TextFieldWithTooltip;
