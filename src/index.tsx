import ReactDOM from "react-dom";
//import App from "./App";
import { AppProvider, App } from "components";
import { breakWhenInternetExplorer } from "js/utils";

breakWhenInternetExplorer();

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,

    document.getElementById("root")
);
