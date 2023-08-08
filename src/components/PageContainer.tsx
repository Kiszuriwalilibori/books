import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

export const PageContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
}));

export default PageContainer;
