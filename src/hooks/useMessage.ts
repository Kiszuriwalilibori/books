import { useSnackbar } from "notistack";

/**
 * Custom hook to display snackbar notifications with various variants.
 *
 * - Provides info, error, success, and warning message methods.
 *
 * @returns {Object} Message display methods for different variants.
 */
const useMessage = () => {
    const { enqueueSnackbar } = useSnackbar();

    const showMessage = {
        info: function (str: string) {
            enqueueSnackbar(str, { variant: "info" });
        },

        error: function (str: string) {
            enqueueSnackbar(str, { variant: "error" });
        },

        success: function (str: string) {
            enqueueSnackbar(str, { variant: "success" });
        },

        warning: function (str: string) {
            enqueueSnackbar(str, { variant: "warning" });
        },
    };

    return showMessage;
};

export default useMessage;
export type ShowMessage = ReturnType<typeof useMessage>;
