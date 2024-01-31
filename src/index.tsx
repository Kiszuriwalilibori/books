import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { AppProvider, App } from "components";
import { breakWhenInternetExplorer } from "js/utils";

breakWhenInternetExplorer();

// ReactDOM.render(
//     <AppProvider>
//         <App />
//     </AppProvider>,

//     document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
    <AppProvider>
        <App />
    </AppProvider>
);
