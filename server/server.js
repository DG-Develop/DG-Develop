
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom/server";
// import App from "./App";
const React = require('react')
const express = require('express')
const ReactDOMServer = require('react-dom/server')
const { StaticRouter } = require('react-router-dom/server')
const App = require('./App')

let app = express();

app.get("*", (req, res) => {
    let html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );
    res.send("<!DOCTYPE html>" + html);
});

app.listen(3000);