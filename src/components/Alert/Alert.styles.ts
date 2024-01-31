import { styled } from "@mui/material/styles";
import { Alert } from "@mui/material";

export const StyledAlert = styled(Alert)(({ theme }) => ({
    background: theme.palette.warning.light,
    color: theme.palette.common.black,
    border: `2px solid ${theme.palette.common.black}`,
    fontWeight: "bold",
    margin: `${theme.spacing(5)} auto`,
    maxWidth: "300px",
    boxShadow: "inset 0 0 5px #EE760A",
}));

export default StyledAlert;
