import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export const ButtonStack = styled(Stack)(({ theme }) => ({
    flexWrap: "wrap",
    justifyContent: "center",
}));

export const TableCellWithButtonsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
}));
