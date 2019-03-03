import {
  ADD_CONTAINER_FAILURE,
  ADD_CONTAINER_SUCCESS,
  ADD_CONTAINER_REQUEST,
  UPDATE_CONTAINER_FAILURE,
  UPDATE_CONTAINER_SUCCESS,
  UPDATE_CONTAINER_REQUEST,
  SELECT_CONTAINER,
  DELETE_CONTAINER,
  DELETE_ALL_CONTAINERS
} from '../helpers/constants'

const initialState = {
  isFetching: false,
  isEditing: false,
  list: [],
}

/**
 * Fucntion is the User reducer
 * It is responsible for returning a new container state
 * @param {object} state
 * @param {object} action
 */
function container (state = initialState, action) {
  switch (action.type) {
    case ADD_CONTAINER_REQUEST: return Object.assign({}, state, {
      isFetching: true,
    })

    case ADD_CONTAINER_SUCCESS:
      let newList = state.list
      if (state.list.indexOf(action.payload.itemName)) {
        newList = newList.map(l => {
          if (l.itemName === action.payload.itemName) {
            return action.payload
          }
          return l
        })
      } else {
        newList.push(action.payload)
      }
      return Object.assign({}, state, {
        isFetching: false,
        list: newList,
      })

    case ADD_CONTAINER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.errorMessage,
      })

    case UPDATE_CONTAINER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.errorMessage,
      })
    case UPDATE_CONTAINER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.payload,
      })
    case UPDATE_CONTAINER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case SELECT_CONTAINER :
      return Object.assign({}, state, {
        isFetching: false,
        selected: action.payload,
      })
    case DELETE_CONTAINER :
      return Object.assign({}, state, {
        isFetching: false,
        selected: {},
        list: action.payload,
      })
    case DELETE_ALL_CONTAINERS :
      return Object.assign({}, state, {
        isFetching: false,
        selected: {},
        list: [],
      })
    default:
      return state
  }
}
export default container
