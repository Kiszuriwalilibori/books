import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import { white } from "material-ui/styles/colors";

export const CustomBox = withStyles({
  root: {
    background: white,
    padding: "20px",
    margin: "0 2vw",
    border: "1px solid #CD0D11",
    borderRadius: "5px",
    boxShadow: "0px 0px 58px -2px rgba(0,0,0,0.75),inset 0 0 5px #CD0D11",
  },
})(Box);
