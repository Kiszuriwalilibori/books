import { useNavigate } from "react-router-dom";

import Paths from "routing";
import useDispatchAction from "./useDispatchAction";

const SHOP_URL = "https://books.google.pl/books?id=";

export const useGoToShop = () => {
    const navigate = useNavigate();
    const { showError } = useDispatchAction();
    const goToShop = (bookID: any) => {
        const { bookID: ID } = bookID;
        if (ID && typeof ID === "string") {
            try {
                window.open(SHOP_URL + ID, "_blank");
            } catch (err: any) {
                let result = { isError: true, errorMessage: err.message ? err.message : `Błąd podczas próby otwarcia strony ${SHOP_URL + ID}` };
                showError(result);
                navigate(Paths.error);
            }
        }
    };
    return goToShop;
};
export default useGoToShop;
