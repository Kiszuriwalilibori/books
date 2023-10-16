import { BookDetails } from "types/types";
import { LocalStorage, FilteredStorage } from "../js/utils";
import useDispatchAction from "./useDispatchAction";
import useMessage from "./useMessage";

export interface FavoriteBooks extends FilteredStorage {
    showSize: () => void;
    manageSupport: () => boolean;
    add: (label: string, item: BookDetails) => void;
    remove: (id: string) => void;
    areEmpty: () => boolean;
    areNotEmpty: () => boolean;
    contain: (label: string) => boolean;
}
const useFavoriteBooks = () => {
    const { cacheSupported } = useDispatchAction();
    const showMessage = useMessage();
    const favoriteBooks = new FilteredStorage(item => item.kind === "books#volume") as FavoriteBooks;
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
            showMessage.success("Poprawnie dodano do ulubionych następującą książkę: " + item.volumeInfo.title);
        } catch (error) {
            showMessage.error("Podczas próby dodania ksiązki do ulubionych wystapił błąd");
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
        return favoriteBooks.getLength() === 0 ? true : false;
    };
    const areNotEmpty: typeof favoriteBooks.areNotEmpty = () => {
        return favoriteBooks.getLength() === 0 ? false : true;
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
