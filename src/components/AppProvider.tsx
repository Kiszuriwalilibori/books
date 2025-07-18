import React from "react";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { register } from "serviceWorkerRegistration";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { booksReducer, cacheReducer, dataSourceReducer, detailsReducer, errorReducer, filtersVisibilityReducer, loadingReducer, onlineReducer, removeBookModalReducer } from "store/reducers";

import "../styles/App.css";

const queryClient = new QueryClient();

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["books", "details"],
};

const rootReducer = combineReducers({
    books: booksReducer,
    details: detailsReducer,
    error: errorReducer,
    cache: cacheReducer,
    dataSource: dataSourceReducer,
    filtersVisibility: filtersVisibilityReducer,
    loading: loadingReducer,
    online: onlineReducer,
    removeBookModal: removeBookModalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
let persistor = persistStore(store);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
                    <PersistGate loading={null} persistor={persistor}>
                        <Router>{children}</Router>
                    </PersistGate>
                </Provider>
                {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
            </QueryClientProvider>
        </SnackbarProvider>
    );
};

register();

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
