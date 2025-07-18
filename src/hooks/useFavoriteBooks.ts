import { FavoriteRecord } from "types";
import { LocalStorage, FilteredStorage } from "../utils";
import { useDispatchAction, useMessage } from "hooks";
import { FAVORITE_BOOK_IDENTIFIER } from "config";

export interface FavoriteBooks extends FilteredStorage<FavoriteRecord[]> {
    showSize: () => void;
    manageSupport: () => boolean;
    add: (label: string, item: FavoriteRecord) => boolean;
    remove: (id: string) => void;
    areEmpty: () => boolean;
    areNotEmpty: () => boolean;
    contain: (label: string) => boolean;
}
const useFavoriteBooks = () => {
    const { cacheSupported } = useDispatchAction();
    const showMessage = useMessage();
    const favoriteBooks = new FilteredStorage(item => item.hasOwnProperty("kind") && item.kind === FAVORITE_BOOK_IDENTIFIER) as FavoriteBooks;

    const showSize: typeof favoriteBooks.showSize = () => {
        const length = favoriteBooks.getLength();
        let storageReport = "";
        if (length) {
            storageReport = `Funkcjonalność lokalnego magazynu danych jest aktywna. W Ulubionych jest ${length}  książek`;
        } else {
            storageReport = `Funkcjonalność lokalnego magazynu danych jest aktywna. W Ulubionych nie ma książek`;
        }
        showMessage.info(storageReport);
    };

    const manageSupport: typeof favoriteBooks.manageSupport = () => {
        const isSupported = LocalStorage.isSupported();
        if (isSupported) {
            cacheSupported();
        } else {
            showMessage.warning("Ulubione nie są obsługiwane");
        }

        return isSupported;
    };

    const add: typeof favoriteBooks.add = (label, item) => {
        try {
            LocalStorage.set(label, item);
            showMessage.success("Poprawnie dodano do ulubionych następującą książkę: " + item.title);
            return true;
        } catch (error) {
            showMessage.error("Podczas próby dodania książki do ulubionych wystąpił błąd");
            return false;
        }
    };

    const contain: typeof favoriteBooks.contain = label => {
        return favoriteBooks.hasCertainItem((item: { id: string }) => item.id === label);
    };

    const getAll: typeof favoriteBooks.getAll = () => {
        const result = favoriteBooks.getAll();
        return result;
    };
    const remove: typeof favoriteBooks.remove = id => {
        LocalStorage.remove(id);
    };
    const areEmpty: typeof favoriteBooks.areEmpty = () => {
        return favoriteBooks.getLength() === 0;
    };
    const areNotEmpty: typeof favoriteBooks.areNotEmpty = () => {
        return favoriteBooks.getLength() !== 0;
    };

    favoriteBooks.showSize = showSize;
    favoriteBooks.manageSupport = manageSupport;
    favoriteBooks.add = add;
    favoriteBooks.getAll = getAll;
    favoriteBooks.remove = remove;
    favoriteBooks.areEmpty = areEmpty;
    favoriteBooks.areNotEmpty = areNotEmpty;
    favoriteBooks.contain = contain;

    return { favoriteBooks };
};
export default useFavoriteBooks;
