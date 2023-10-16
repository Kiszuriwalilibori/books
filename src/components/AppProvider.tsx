import React from "react";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { register } from "serviceWorkerRegistration";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";

import { rootSaga } from "js/utils";
import { booksReducer, cacheReducer, dataSourceReducer, detailsReducer, errorReducer, loadingReducer, onlineReducer } from "js/redux/reducers";
import { FiltersVisibilityContextProvider, RemoveBookModalVisibilityContextProvider } from "contexts";

import "../styles/App.css";

const queryClient = new QueryClient();
const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    books: booksReducer,
    details: detailsReducer,
    error: errorReducer,
    cache: cacheReducer,
    dataSource: dataSourceReducer,
    loading: loadingReducer,
    online: onlineReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saga).concat(thunk),
});

const AppProvider: React.FC = ({ children }) => {
    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            preventDuplicate={true}
        >
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <FiltersVisibilityContextProvider>
                        <RemoveBookModalVisibilityContextProvider>
                            <Router>{children}</Router>
                        </RemoveBookModalVisibilityContextProvider>
                    </FiltersVisibilityContextProvider>
                </Provider>
                {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
            </QueryClientProvider>
        </SnackbarProvider>
    );
};

saga.run(rootSaga);
register();

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
