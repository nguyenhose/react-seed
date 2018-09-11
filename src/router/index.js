import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import Home from '../container/HomeContainer'
const router = (
  <HashRouter>
    <Route component={Home} path={'/'} />
  </HashRouter>
)
export default router
