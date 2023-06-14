import React, { lazy } from "react";
// import About from "../containers/About";
import Home from '../containers/Home'
import Work from '../containers/Work'
import ErrorPage from '../containers/ErrorPage'
import Contact from "../containers/Contact";
import WorkInfo from "../containers/WorkInfo";
import { defer } from "react-router-dom";

const About = lazy(() => import("../containers/About"))

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        loader: async () => {
            const loadedTask = new Promise(resolve => {
                setTimeout(() => {
                    resolve('loaded')
                }, 4000)
            })

            const loaded = await loadedTask

            return defer({ loaded })
        },
        element: <About />

        ,
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