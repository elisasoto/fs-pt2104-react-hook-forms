import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ContextProvider } from 'store'

import Home from 'pages'
import Login from 'pages/login'
import User from 'pages/user'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/user' component={User} />
          <Redirect to='/home' />
        </Switch>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
