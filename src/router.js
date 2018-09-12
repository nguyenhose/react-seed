import React from 'react'
import ReactDOM from 'react-dom';
import requireAuth from './components/hoc/auth.js'
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import Home from './components/home/container'
const router = (
  <HashRouter>
    <Route component={requireAuth(Home)} path={'/'} />
  </HashRouter>
)
export default router
