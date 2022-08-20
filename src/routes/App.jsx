import React from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import '../assets/Vars.scss'
import Home from '../containers/Home'

const App= () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" element={<Home />} />
            </Switch>
        </BrowserRouter>
        // <h1>Hola mundo</h1>
    )
}

export default App
