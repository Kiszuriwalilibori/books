import * as React from "react";
import { BookID } from "types/types";

interface Props {
    isRemoveBookModalVisible: boolean;
    book?: BookID | null;
    showWarningModal: (bookID: BookID) => void;
    closeModal: () => void;
}
const initialState = {
    isRemoveBookModalVisible: false,
    book: null,
};
const RemoveBookModalVisibilityContext = React.createContext<Props>({} as Props);

function RemoveBookModalVisibilityContextProvider({ children }: { children: React.ReactNode }) {
    const [isRemoveBookModalVisible, setIsRemoveBookModalVisible] = React.useState<Props["isRemoveBookModalVisible"]>(initialState.isRemoveBookModalVisible);
    const [bookID, setBookID] = React.useState<Props["book"]>(initialState.book);

    return (
        <RemoveBookModalVisibilityContext.Provider
            value={{
                isRemoveBookModalVisible,
                book: bookID,
                showWarningModal: bookID => {
                    setBookID(bookID);
                    setIsRemoveBookModalVisible(true);
                },
                closeModal: () => setIsRemoveBookModalVisible(false),
            }}
        >
            {children}
        </RemoveBookModalVisibilityContext.Provider>
    );
}

function useRemoveBookModalVisibilityContext() {
    const context = React.useContext(RemoveBookModalVisibilityContext);
    if (context === undefined) {
        throw new Error("Context must be used within a ContextProvider");
    }
    return context;
}

export { RemoveBookModalVisibilityContextProvider, useRemoveBookModalVisibilityContext, RemoveBookModalVisibilityContext };
export type { Props as RemoveBookModalVisibilityContextProps };
