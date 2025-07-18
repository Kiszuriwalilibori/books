import { ButtonProps } from "@mui/material";
import React from "react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, ...nativeProps } = props;
    const classes = ["button", className].join(" ");

    return (
        <button ref={ref} className={classes} {...nativeProps} disabled={props.disabled}>
            {props.children}
        </button>
    );
});

export default Button;
