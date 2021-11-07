import React from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from '../containers/Home'

const App: React.FunctionComponent<{}> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
