import React from "react";
import About from "../containers/About";
import Home from '../containers/Home'
import Work from '../containers/Work'
import ErrorPage from '../containers/ErrorPage'
import Contact from "../containers/Contact";
import WorkInfo from "../containers/WorkInfo";

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
        path: '/work',
        element: <Work />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/work/:workname',
        element: <WorkInfo />,
    },
]

export default AppRoutes