import { AlertTitle } from "@mui/material";

import renderConditionally from "hocs/renderConditionally";
import StyledAlert from "./Alert.styles";

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
