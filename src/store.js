import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from './rootReducer'

export default function configureStore(initialState={}) {
  return createStore(rootReducer, applyMiddleware(thunk))
}
