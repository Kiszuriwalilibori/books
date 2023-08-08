import * as React from 'react';

interface RemoveBookModalVisibilityContextProps {
    isVisible: boolean;
    target?: Element | null;
    openModal: (target: Element) => void;
    closeModal: () => void;
}
const initialState = {
    isVisible: false,
    target: null,
};
const RemoveBookModalVisibilityContext = React.createContext<RemoveBookModalVisibilityContextProps>(
    {} as RemoveBookModalVisibilityContextProps,
);

function RemoveBookModalVisibilityContextProvider({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = React.useState<RemoveBookModalVisibilityContextProps['isVisible']>(
        initialState.isVisible,
    );
    const [target, setTarget] = React.useState<RemoveBookModalVisibilityContextProps['target']>(
        initialState.target,
    );

    return (
        <RemoveBookModalVisibilityContext.Provider
            value={{
                isVisible,
                target,
                openModal: target => {
                    setTarget(target);
                    setIsVisible(true);
                },
                closeModal: () => setIsVisible(false),
            }}
        >
            {children}
        </RemoveBookModalVisibilityContext.Provider>
    );
}

function useRemoveBookModalVisibilityContext() {
    const context = React.useContext(RemoveBookModalVisibilityContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
}

export {
    RemoveBookModalVisibilityContextProvider,
    useRemoveBookModalVisibilityContext,
    RemoveBookModalVisibilityContext,
};
export type { RemoveBookModalVisibilityContextProps };
