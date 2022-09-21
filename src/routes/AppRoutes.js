import React from "react";
import About from "../containers/About";
import Home from '../containers/Home'
import ErrorPage from '../containers/ErrorPage'
import { createRoutesFromElements, Route } from "react-router-dom";

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

// const AppRoutes = createRoutesFromElements(
//         <Route path="/" element={<Home />} errorElement={<ErrorPage />} >
//             <Route path="about" element={<About />} />
//         </Route>
    
// )

export default AppRoutes