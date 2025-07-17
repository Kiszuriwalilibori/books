import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const PageContainer = styled(Container)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
}));

export const AlertBox = styled(Box)(({ theme }) => ({
    background: theme.palette.common.white,
    padding: "10px",
    margin: "0 2vw",
    border: "1px solid #cd0d11",
    borderRadius: "5px",
    boxShadow: "0px 0px 58px -2px rgba(0, 0, 0, 0.75), inset 0 0 5px #cd0d11",
}));

export const AlertBoxItem = styled("span")(() => ({
    fontSize: "2rem",
    color: "#CD0D11",
    "@media only screen and (max-width: 780px)": {
        fontSize: "calc(12px + 20 * ((100vw - 320px) / 460))",
    },
}));

export const SearchPageLogo = styled("header")(() => ({
    textAlign: "center",
    fontWeight: 700,
    fontSize: "3rem",
    color: "#000",
    letterSpacing: "-0.05rem",
    textShadow: "-2px -2px 1px #ff6, 2px -2px 1px #ff6, -2px 2px 1px #ff6, 2px 2px 1px #ff6",
    textRendering: "optimizeLegibility",
    "@media only screen and (max-width: 790px)": {
        fontSize: "calc(24px + 24 * ((100vw - 320px) / 470))",
    },
}));

export const BooksPageLogo = styled("h1")(() => ({
    textAlign: "center",
    fontWeight: 700,
    fontSize: "3rem",
    color: "#000",
    letterSpacing: "-0.05rem",
    textShadow: "-2px -2px 1px #ff6, 2px -2px 1px #ff6, -2px 2px 1px #ff6, 2px 2px 1px #ff6",
    textRendering: "optimizeLegibility",
    "@media only screen and (max-width: 790px)": {
        fontSize: "calc(24px + 24 * ((100vw - 320px) / 470))",
    },
}));

export const SearchInputs = styled(Box)(() => ({
    padding: "0.5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "@media only screen and (max-width: 790px)": { flexDirection: "column" },
}));

export const SearchButtons = styled(Box)(() => ({
    marginTop: "40px",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 576px)": { flexDirection: "column" },
}));

export const NavigationContainer = styled("nav")(() => ({
    padding: "0.5rem",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    "@media only screen and (max-width: 900px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export const BookForm = styled("form")(() => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

    "& .MuiTextField-root": {
        margin: "8px",
        width: "25ch",
        boxShadow: "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16),0 8px 8px rgba(0,0,0,0.20);",
    },
    "& .MuiInputBase-root": {
        color: "white !important",
        fontFamily: "Open Sans, sans-serif !important",
        backgroundColor: "rgba(122, 194, 33, 0.8)",
        "& :focus": { outline: "2px solid #1076AB", outlineOffset: "-8px" },
    },
    "& .MuiFormLabel-root": { color: "white !important", fontFamily: "Montserrat" },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "3px solid",
        borderColor: "rgb(122, 194, 33)!important",
    },
}));
