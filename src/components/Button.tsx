import { ButtonProps } from "@mui/material";

export const Button = (props: ButtonProps): JSX.Element => {
    const { className, ...nativeProps } = props;
    const classes = ["button", className].join(" ");

    return (
        <button className={classes} {...nativeProps} disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;
