import {
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "../assets/Index.scss";

if (window.innerWidth >= 1024) {
  import("../assets/IndexDesktop.scss");
}

const App =
  process.env.NODE_ENV === "production"
    ? createHashRouter(AppRoutes)
    : createBrowserRouter(AppRoutes);

export default App;
