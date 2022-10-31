import {
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "../assets/Index.scss";

const App =
  process.env.NODE_ENV === "production"
    ? createHashRouter(AppRoutes)
    : createBrowserRouter(AppRoutes);

export default App;
