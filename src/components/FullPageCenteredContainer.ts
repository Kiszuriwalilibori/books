import Box from "@mui/material/Box";

import { withStyles } from "@mui/styles";

export const FullPageCenteredContainer = withStyles({
  root: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent,",
    minHeight: "100vh",
  },
})(Box);
