import React from "react";
import About from "../containers/About";
import Home from '../containers/Home'
import ErrorPage from '../containers/ErrorPage'
import Contact from "../containers/Contact";

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
]

export default AppRoutes