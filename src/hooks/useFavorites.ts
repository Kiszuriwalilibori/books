import { createMessageSnackBarTextContent, LocalStorage, FilteredStorage } from "../js/utils";
import useDispatchAction from "./useDispatchAction";

export type Favorites = FilteredStorage & {
    placeAlreadyStored: Function;
} & { placeNotYetStored: Function } & { showSize: Function } & { manageSupport: Function } & {
    add: Function;
} & { getAllItems: Function } & { remove: Function } & { areEmpty: Function } & { containsBooks: Function };

const useFavorites = () => {
    const { cacheSupported, toggleSnackBar } = useDispatchAction();

    const favorites = new FilteredStorage(item => item.kind === "books#volume") as Favorites;

    const showFavoritesSize = () => {
        const length = favorites.getLength();
        let storageItemsCount = "";
        if (length) {
            storageItemsCount = `W Ulubionych jest ${length}  książek`;
        } else {
            storageItemsCount = "W Ulubionych nie ma książek";
        }

        toggleSnackBar(createMessageSnackBarTextContent("cacheSupported", storageItemsCount.toString()));
    };

    const manageSupport = () => {
        const isSupported = LocalStorage.isSupported();
        if (isSupported) {
            cacheSupported();
        } else {
            toggleSnackBar(createMessageSnackBarTextContent("cacheSupported", "Ulubione nie są obsługiwane"));
        }

        return isSupported;
    };

    const addToFavorites = (label: string, item: Object) => {
        try {
            LocalStorage.set(label, item);

            return true;
        } catch (error) {
            return false;
        }
    };

    const getAllItems = () => {
        const result = favorites.getAllItems();

        return result;
    };
    const remove = (id: string) => {
        LocalStorage.remove(id);
    };
    const areEmpty = () => {
        return favorites.getLength() === 0 ? true : false;
    };
    const containsBooks = () => {
        return favorites.getLength() === 0 ? false : true;
    };
    favorites.showSize = showFavoritesSize;
    favorites.manageSupport = manageSupport;
    favorites.add = addToFavorites;
    favorites.getAllItems = getAllItems;
    favorites.remove = remove;
    favorites.areEmpty = areEmpty;
    favorites.containsBooks = containsBooks;

    return { favorites };
};
export default useFavorites;
