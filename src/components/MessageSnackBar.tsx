import * as React from "react";
import { withStyles } from "@mui/styles";
import { connect } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

import { useDispatchAction } from "hooks";
import { RootStateType } from "types";

const MyAlert = withStyles({
    root: {
        background: "rgba(122, 194, 33, 0.8);",
        color: "white",
        border: "1px solid #298B01",
        boxShadow: "inset 0 0 5px #298B01",
    },
})(Alert);

interface Props {
    isOpen: boolean;
    snackbarText: string;
}

export const SnackBar = (props: Props) => {
    const { isOpen, snackbarText } = props;
    const { toggleSnackBar } = useDispatchAction();

    const clearSnackBar = () => {
        return toggleSnackBar("");
    };

    return (
        <Snackbar open={isOpen} autoHideDuration={3000} onClose={clearSnackBar}>
            <MyAlert severity="success" variant="filled">
                {snackbarText}
            </MyAlert>
        </Snackbar>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    isOpen: state.snackbar.isSnackBarVisible,
    snackbarText: state.snackbar.snackbarText,
});

export default connect(mapStateToProps, {})(SnackBar);
