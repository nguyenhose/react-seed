import { combineReducers } from 'redux'
import { homeReducer } from './components/home/reducer'
import { personReducer } from './components/person/reducer'
export default combineReducers({
  home: homeReducer,
  person: personReducer
})
