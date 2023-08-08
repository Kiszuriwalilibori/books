import loadable from "@loadable/component";
import { Routes, Route } from "react-router-dom";
import Paths from "Routing/Paths";
import { CheckSupportForLocalStorage } from "components";

const Books = loadable(() => import("Pages/Books/BooksPage"));
const Connecting = loadable(() => import("Pages/ConnectingPage"));
const Error = loadable(() => import("Pages/ErrorPage"));
const IndividualBook = loadable(() => import("Pages/IndividualBookPage"));
const LoadPage = loadable(() => import("Pages/ConnectingPage"));
const NotFound = loadable(() => import("Pages/NotFoundPage"));
const Search = loadable(() => import("Pages/SearchPage"));
const StarWars = loadable(() => import("Pages/LandingPage"));
const NoPage = loadable(() => import("Pages/NoPage"));

function App() {
    return (
        <CheckSupportForLocalStorage>
            <Routes>
                <Route path={Paths.landing} element={<StarWars />} />
                <Route path={Paths.search} element={<Search />} />
                <Route path={Paths.books} element={<Books />} />
                <Route path={Paths.not_found} element={<NotFound />} />
                <Route path={Paths.connecting} element={<Connecting />} />
                <Route path={Paths.error} element={<Error />} />
                <Route path={Paths.individualBook} element={<IndividualBook />} />
                <Route path={Paths.load} element={<LoadPage />} />
                <Route path={Paths.no_page} element={<NoPage />} />
            </Routes>
        </CheckSupportForLocalStorage>
    );
}
export default App;
