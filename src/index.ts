import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
/* import reducers from './reducers' */
import { Router } from 'react-router-dom'

const history = createBrowserHistory();
/* const store = createStore(reducers, {}, applyMiddleware(reduxThunk)) */

ReactDOM.render(<App />, document.getElementById('app'))
