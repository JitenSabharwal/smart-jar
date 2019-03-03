import {
  ADD_CONTAINER_FAILURE,
  ADD_CONTAINER_SUCCESS,
  ADD_CONTAINER_REQUEST,
  SELECT_CONTAINER,
  DELETE_CONTAINER,
  DELETE_ALL_CONTAINERS
} from '../helpers/constants'

import {
  ADD_CONTAINER_ENDPOINT,
  DELETE_CONTAINER_ENDPOINT,
  DELETE_ALL_CONTAINER_ENDPOINT,
  ALL_CONTAINER_ENDPOINT
} from '../helpers/endpoints'

import { postRequest } from '../helpers/util'

function requestSent (payload, type) {
  return {
    type,
    isFetching: true,
    payload,
  }
}

function requestFailed (payload, type) {
  return {
    type,
    isFetching: true,
    payload,
  }
}

function requestSucess (payload, type) {
  return {
    type,
    isFetching: true,
    payload,
  }
}

function selectingContainer (payload, type) {
  return {
    type,
    isFetching: false,
    payload,
  }
}

/**
 * This Action creator is used to Add a new user
 * ToDo:
 * Data request to server
 * dispatch event to change the state
 * @param {object} data
 */
export const addContainer = (data) => {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSent(data, ADD_CONTAINER_REQUEST))
    return postRequest(ADD_CONTAINER_ENDPOINT, data)
      .then(resp => {
        const { success, data, error } = resp.data
        if (!success) {
          // If there was a problem, we want to
          dispatch(requestFailed(error, ADD_CONTAINER_FAILURE))
          return Promise.reject(data)
        }
        dispatch(requestSucess(data, ADD_CONTAINER_SUCCESS))
      })
      .catch(Promise.reject)
  }
}
export const findContainer = (data) => {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSent(data, ADD_CONTAINER_REQUEST))
    return postRequest(ALL_CONTAINER_ENDPOINT, data)
      .then(resp => {
        const { success, data, error } = resp.data
        if (!success) {
          // If there was a problem, we want to
          dispatch(requestFailed(error, ADD_CONTAINER_FAILURE))
          return Promise.reject(data)
        }
        dispatch(requestSucess(data, ADD_CONTAINER_SUCCESS))
      })
      .catch(Promise.reject)
  }
}
/**
 * This Action creator is used to Delte a user
 * ToDo:
 * Send delete request to server with
 * Dispatch event to change the state
 * @param {stirng} userId
 */
export const deleteContainer = (userId) => {
  return async (dispatch, getState) => {
    // We dispatch requestLogin to kickoff the call to the API
    const state = JSON.parse(JSON.stringify(getState()))
    const newContainerList = state.user.list.filter(u => u._id !== userId)
    await postRequest(`${DELETE_CONTAINER_ENDPOINT}/${userId}`)
    dispatch(requestSucess(newContainerList, DELETE_CONTAINER))
  }
}

/**
 * This Action creator is used to Delte all the users
 * ToDo:
 * Send deleteAll request to server with
 * Dispatch event to change the state of user list to []
 * @param {stirng} userId
 */
export const deleteAllContainers = () => {
  return async dispatch => {
    await postRequest(`${DELETE_ALL_CONTAINER_ENDPOINT}`)
    dispatch(requestSucess([], DELETE_ALL_CONTAINERS))
  }
}
/**
 * Action Creator to select the given user
 * Todo:
 * Set the user.selected state  to the given data
 * @param {object} data
 */
export const selectContainer = (data) => {
  return dispatch => {
    dispatch(selectingContainer(data, SELECT_CONTAINER))
  }
}
