import * as React from "react";

import { Alert as _Alert, AlertTitle } from "@mui/material";
import { withStyles } from "@mui/styles";
import renderConditionally from "hocs/renderConditionally";

const StyledAlert = withStyles({
    root: {
        background: "#F5C200",
        color: "black",
        border: "1px solid #EE760A",
        fontWeight: "bold",
        margin: "40px auto",
        maxWidth: "300px",
        boxShadow: "inset 0 0 5px #EE760A",
    },
})(_Alert);

interface Props {
    alertMessage: string;
}
const Alert = (props: Props) => {
    const { alertMessage } = props;

    return (
        <StyledAlert severity="error" role="alert">
            <AlertTitle>Uwaga!!!</AlertTitle>
            {alertMessage}
        </StyledAlert>
    );
};

export default renderConditionally(Alert);
