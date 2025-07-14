import * as React from "react";
interface Props {
    areFiltersVisible: boolean;
    toggleFiltersVisibility: () => void;
}

interface ProviderProps {
    children: React.ReactNode;
}

const initialState = {
    areFiltersVisible: true,
};

const FiltersVisibilityContext = React.createContext<Props>({} as Props);

class FiltersVisibilityContextProvider extends React.Component<ProviderProps, { areVisible: boolean }> {
    state = {
        areVisible: initialState.areFiltersVisible,
    };

    render() {
        return (
            <FiltersVisibilityContext.Provider
                value={{
                    areFiltersVisible: this.state.areVisible,
                    toggleFiltersVisibility: () => this.setState({ areVisible: !this.state.areVisible }),
                }}
            >
                {this.props.children}
            </FiltersVisibilityContext.Provider>
        );
    }
}

function useFiltersVisibilityContext() {
    const context = React.useContext(FiltersVisibilityContext);
    if (context === undefined) {
        throw new Error("it must be used within a FiltersVisibilityContextProvider");
    }
    return context;
}
export { FiltersVisibilityContextProvider, FiltersVisibilityContext, useFiltersVisibilityContext };
