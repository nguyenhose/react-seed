import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store.js'
import routers from './router.js'

ReactDOM.render(
  <Provider store={configureStore()}>
    {routers}
  </Provider>,
  document.getElementById('root')
)
