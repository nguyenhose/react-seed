import React from 'react'
import ReactDOM from 'react-dom';
import requireAuth from './components/hoc/auth.js'
import { BrowserRouter, Route, HashRouter, Switch } from 'react-router-dom'
import Home from './components/home/container'
import Person from './components/person/container'
const router = (
  <BrowserRouter>
    <Switch>
      <Route exact component={requireAuth(Home)} path={'/'} />
      <Route component={requireAuth(Person)} path={'/person/:username'} />
    </Switch>
  </BrowserRouter>
)
export default router
