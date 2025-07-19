import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FilterField = styled(TextField)(({ theme }) => ({
    caretColor: theme.palette.common.black,
    backgroundColor: "#FFDD40",
    "& input": { color: theme.palette.common.black },
    "& input:focus": { outline: "2px solid #1076AB", outlineOffset: theme.spacing(-1) },
    "& [data-shrink=true]": { display: "none" },
    "& .MuiFormLabel-root": {
        fontSize: "11px",
        color: "#C04604",
        marginLeft: theme.spacing(-1),
        maxWidth: "80%",
        width: "110px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        "&.Mui-focused": { visibility: "hidden" },
        "@media only screen and (max-width: 640px)": {
            fontSize: "calc(8px + 3 * ((100vw - 320px) / 320))",
        },
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #FFDD40",
        borderColor: "#FFDD40 !important",
    },
}));

export default FilterField;
