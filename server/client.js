import { hydrateRoot } from "react-dom/client";
import App from "./routes/App";

const rootElement = document.getElementById("app");
const root = hydrateRoot(rootElement)

root.render(
    <React.StrictMode>
        <RouterProvider router={App} />
    </React.StrictMode>
)