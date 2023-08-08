import ReformatFetchedBooks from "./ReformatFetchedBooks";
import { store } from "components/AppProvider";
import { RedirectType, FetchResult, TemporaryStorageContent } from "types";
import createMessageSnackBarTextContent from "./createMessageSnackBarTextContent";

const fetchBooksFromAPI = (path: string, redirect: RedirectType) => {
    let startIndex = 0;
    const indexStep = 40;
    let temporaryStorageContent: TemporaryStorageContent = [];
    let result: FetchResult = { error: false };

    async function recursiveSingleFetch() {
        const fullPath = path + startIndex.toString();

        const fetchResult = await fetch(fullPath).catch(error => {
            result.error = true;
            result.errorMessage = error.message;
            store.dispatch({ type: "ERROR_SHOW", payload: result });
            redirect.error!();
        });
        if (fetchResult) {
            const resp = await fetchResult.json();
            if (resp.items) {
                startIndex += indexStep;
                temporaryStorageContent = temporaryStorageContent.concat(resp.items);
                recursiveSingleFetch();
            } else {
                if (temporaryStorageContent.length === 0) redirect.not_found!();
                else {
                    result.data = ReformatFetchedBooks.Run(temporaryStorageContent);

                    store.dispatch({ type: "BOOKS_FETCH", payload: result });
                    store.dispatch({ type: "IS_FETCHED_FROM_URL_SET", payload: true });
                    store.dispatch({
                        type: "SNACKBAR_TOGGLE",
                        payload: createMessageSnackBarTextContent("booksFetched", result.data.length.toString()),
                    });

                    redirect.books!();
                }
            }
        }
    }
    recursiveSingleFetch();
};

export default fetchBooksFromAPI;
