import { snackBarTexts } from "config";

const createMessageSnackBarTextContent = (type: string, item: string): string => snackBarTexts[type] + item;

export default createMessageSnackBarTextContent;
