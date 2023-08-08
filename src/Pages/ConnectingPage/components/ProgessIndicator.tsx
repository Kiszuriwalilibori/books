import { withStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

const ProgressIndicator = withStyles({
    root: {
        color: "rgba(122, 194, 33, 0.8);",
    },
})(CircularProgress);

export default ProgressIndicator;
