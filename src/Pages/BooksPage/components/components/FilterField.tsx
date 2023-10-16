import { withStyles } from "@mui/styles";
import { TextField } from "@mui/material";

const FilterField = withStyles({
    root: {
        caretColor: "black",
        backgroundColor: "#FFDD40",
        "& input": { color: "black" },
        "& input:focus": { outline: "2px solid #1076AB", outlineOffset: "-8px" },
        "& .MuiFormLabel-root": {
            fontSize: "11px",
            color: "#C04604",
            marginLeft: "-8px",
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
    },
})(TextField);

export default FilterField;
