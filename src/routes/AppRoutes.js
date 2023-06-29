import React, { lazy } from "react";
import About from "../containers/About";
import Home from '../containers/Home'
import Work from '../containers/Work'
import Contact from "../containers/Contact";
import WorkInfo from "../containers/WorkInfo";
import ErrorPage from '../containers/ErrorPage'

// const Home = lazy(() => import('../containers/Home'))
// const About = lazy(() => import('../containers/About'))
// const Work = lazy(() => import('../containers/Work'))
// const Contact = lazy(() => import('../containers/Contact'))
// const WorkInfo = lazy(() => import('../containers/WorkInfo'))

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <About />
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