import { store } from "components/AppProvider";
import { RedirectType } from "types";

type GotoShopFn = (obj: { redirect: RedirectType; id: string }) => void;

const goToShop: GotoShopFn = ({ redirect, id }) => {
    if (id && typeof id === "string") {
        const path = "https://books.google.pl/books?id=" + id;

        try {
            window.open(path, "_blank");
        } catch (err: any) {
            let result = { error: true, errorMessage: err.message };
            store.dispatch({ type: "BOOKS_FETCH", payload: result });
            redirect.error!();
        }
    }
};

export default goToShop;
