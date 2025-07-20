import { createRoot } from "react-dom/client";
import { AppProvider, App } from "components";
import { breakWhenInternetExplorer } from "utils";
import "./i18n/config";

breakWhenInternetExplorer();

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
    <AppProvider>
        <App />
    </AppProvider>
);
