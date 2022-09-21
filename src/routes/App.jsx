import React from 'react'
import {
  BrowserRouter,
  // Routes as Switch,
  // BrowserRouter as Router ,
  createBrowserRouter,
  Routes,
  // RouterProvider,
  Route
} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "../assets/Index.scss";
// import Home from "../containers/Home";

if (window.innerWidth >= 1024) {
  import("../assets/IndexDesktop.scss");
}

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {AppRoutes.map((route, index) => {
//           const { element, ...rest } = route;
//           return <Route key={index} {...rest} element={element} />;
//         })}
//       </Routes>
//     </BrowserRouter>
//   );
// };

const App = createBrowserRouter(AppRoutes)



export default App;
