import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { loadInitailState } from '../helpers/util'
import {ALL_CONTAINER_ENDPOINT} from '../helpers/endpoints'
const middleware = [thunk, logger]
// const middleware = [thunk]

const initialState = {}
// export default store
export const configureStoreAsync = () => {
  // Loading the initial user list on app load
  return loadInitailState(ALL_CONTAINER_ENDPOINT)
    .then((initialStoreState) => {
      const store = createStore(
        rootReducer,
        initialStoreState,
        applyMiddleware(...middleware)
        // composeWithDevTools(applyMiddleware(...middleware))
      )
      return store
    })
    .catch((error) => {
      if (error) {
        // console.log('opened with error', error)
      }
      const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
        // composeWithDevTools(applyMiddleware(...middleware))
      )
      return store
    })
}
