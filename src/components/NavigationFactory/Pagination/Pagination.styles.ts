import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";

export const StyledPagination = styled(Pagination)(({ theme }) => ({
    margin: "40px auto",
    "& button": {
        background: "rgba(122, 194, 33, 0.8)",
        color: theme.palette.common.white,
        border: "1px solid #298B01",
        boxShadow: "inset 0 0 5px #298B01",
    },
    "& button.Mui-selected": {
        background: "#F5C200",
        color: theme.palette.common.black,
        border: "1px solid #EE760A",
        boxShadow: "inset 0 0 5px #EE760A",
    },
    "& button.Mui-disabled": {
        background: "rgb(199, 195, 188)",
        color: "grey",
        border: "1px solid black",
        opacity: 1,
    },
    "& button:not(.Mui-selected):focus": {
        background: "#1076AB",
        color: theme.palette.common.black,
        border: "1px solid black",
        opacity: 1,
    },
}));
