import React from "react";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "../assets/Index.scss";
// import Home from "../containers/Home";

if (window.innerWidth >= 1024) {
  import("../assets/IndexDesktop.scss");
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
        {/* <Route  path="/" element={<Home />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
