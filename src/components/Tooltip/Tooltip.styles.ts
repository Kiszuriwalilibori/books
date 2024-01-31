import BaseTooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export const Tooltip = styled(BaseTooltip)(({ theme }) => ({
    tooltip: {
        backgroundColor: "#FFCF10",
        boxShadow: " 0 0 5px black",
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: 11,
    },
}));

export default Tooltip;
