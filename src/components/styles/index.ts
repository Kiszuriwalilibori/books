import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TableContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "8vw 10px 0 10px",
}));
