import { styled, withStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const ProgressIndicator = withStyles({
    root: {
        color: "rgba(15, 82, 186,0.8)",
    },
})(CircularProgress);

export const Container = styled(Box)({
    zIndex: 2000,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
