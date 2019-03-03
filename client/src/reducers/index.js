import container from './container'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  container,
  form: formReducer,
})
export default rootReducer
