import React from "react";
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import App from "./routes/App";
// import { createBrowserHistory } from 'history';
import { RouterProvider } from 'react-router-dom'
import { Route } from "react-router-dom";

// const history = createBrowserHistory();
/* const store = createStore(reducers, {}, applyMiddleware(reduxThunk)) */

// ReactDOM.render(<App />, document.getElementById('app'))

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <RouterProvider router={App} />
    </React.StrictMode>
)

// root.render(
//     <App />
// )