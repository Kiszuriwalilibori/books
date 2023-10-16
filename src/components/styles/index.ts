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

// export const PageContainer = styled(Box)(({ theme }) => ({
//     margin: "0 auto",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "transparent",
//     minHeight: "100vh",
// }));
// kiedyś używałem dokładnie takiej klasy PageContainer
