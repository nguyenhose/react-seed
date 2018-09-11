import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store'
import routers from './router'

ReactDOM.render(
  <Provider store={configureStore()}>
    {routers}
  </Provider>,
  document.getElementById('root')
)
