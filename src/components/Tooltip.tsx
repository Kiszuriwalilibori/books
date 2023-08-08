import React from "react";
import BaseTooltip from "@mui/material/Tooltip";

import { withStyles } from "@mui/styles";

const Tooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#FFCF10",
    boxShadow: " 0 0 5px black",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
  },
}))(BaseTooltip);

export default React.memo(Tooltip);
