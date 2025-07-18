import loadable from "@loadable/component";

import { Routes, Route } from "react-router-dom";

import Paths from "routing";

import { WithCheckSupportForLocalStorage, WithLoadingIndicatorHOC } from "hocs";
import { useHandleConnectionStatus } from "hooks";
import { SkipLink } from "components";

const Books = loadable(() => import("pages/BooksPage"));
const Error = loadable(() => import("pages/ErrorPage"));
const Details = loadable(() => import("pages/DetailsPage"));
const NotFound = loadable(() => import("pages/NotFoundPage"));
const Search = loadable(() => import("pages/SearchPage"));
const Landing = loadable(() => import("pages/LandingPage"));
const NoPage = loadable(() => import("pages/NoPage"));

function App() {
    useHandleConnectionStatus();
    return (
        <WithCheckSupportForLocalStorage>
            <WithLoadingIndicatorHOC>
                <>
                    <SkipLink />
                    <main role="main" id="main" tabIndex={-1}>
                        <Routes>
                            <Route path={Paths.landing} element={<Landing />} />
                            <Route path={Paths.search} element={<Search />} />
                            <Route path={Paths.books} element={<Books />} />
                            <Route path={Paths.not_found} element={<NotFound />} />
                            <Route path={Paths.error} element={<Error />} />
                            <Route path={Paths.details} element={<Details />} />
                            <Route path={Paths.no_page} element={<NoPage />} />
                        </Routes>
                    </main>
                </>
            </WithLoadingIndicatorHOC>
        </WithCheckSupportForLocalStorage>
    );
}
export default App;
