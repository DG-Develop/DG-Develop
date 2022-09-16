import React from "react";
import About from "../containers/About";
import Home from '../containers/Home'
import ErrorPage from '../containers/ErrorPage'

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
        errroElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <About />,
    },
]


export default AppRoutes