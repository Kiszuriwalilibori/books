import React from "react";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "js/utils";
// import { booksReducer, cacheReducer, dataSourceReducer, detailsReducer, errorReducer, snackbarReducer } from "js/redux/reducers";
import booksReducer from "js/redux/reducers/booksReducer";
import snackbarReducer from "js/redux/reducers/snackbarReducer";
import detailsReducer from "js/redux/reducers/detailsReducer";
import errorReducer from "js/redux/reducers/errorReducer";
import dataSourceReducer from "js/redux/reducers/dataSourceReducer";
import cacheReducer from "js/redux/reducers/cacheReducer";
import { FiltersVisibilityContextProvider, RemoveBookModalVisibilityContextProvider } from "Contexts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/App.css";

const queryClient = new QueryClient();
const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    books: booksReducer,
    snackbar: snackbarReducer,
    details: detailsReducer,
    error: errorReducer,
    cache: cacheReducer,
    dataSource: dataSourceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saga).concat(thunk),
});

const AppProvider: React.FC = ({ children }) => {
    return (
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
    );
};

saga.run(rootSaga);

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
