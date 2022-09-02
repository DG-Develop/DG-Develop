import React from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import '../assets/Index.scss'
import Home from '../containers/Home'


if (window.innerWidth >= 1024) {
    import("../assets/IndexDesktop.scss");
}

const App= () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
