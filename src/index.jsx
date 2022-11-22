import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './app/store'

import App from "./routes/App";


const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={App} />
    </Provider>
  </React.StrictMode>
);
