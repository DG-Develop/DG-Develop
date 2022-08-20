import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'

const history = createBrowserHistory();
/* const store = createStore(reducers, {}, applyMiddleware(reduxThunk)) */

ReactDOM.render(<App />, document.getElementById('app'))
