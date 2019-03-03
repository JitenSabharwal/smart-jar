export const ADD_CONTAINER_REQUEST = 'ADD_CONTAINER_REQUEST'
export const ADD_CONTAINER_SUCCESS = 'ADD_CONTAINER_SUCCESS'
export const ADD_CONTAINER_FAILURE = 'ADD_CONTAINER_FAILURE'
export const UPDATE_CONTAINER_REQUEST = 'UPDATE_CONTAINER_REQUEST'
export const UPDATE_CONTAINER_SUCCESS = 'UPDATE_CONTAINER_SUCCESS'
export const UPDATE_CONTAINER_FAILURE = 'UPDATE_CONTAINER_FAILURE'
export const DELETE_CONTAINER = 'DELETE_CONTAINER'
export const DELETE_ALL_CONTAINERS = 'DELETE_ALL_CONTAINERS'
export const SELECT_CONTAINER = 'SELECT_CONTAINER'
export const CONTAINER_TABLE_HEADS = [
  { id: 'firstName', numeric: false, disablePadding: true, label: 'FirstName' },
  { id: 'lastName', numeric: false, disablePadding: false, label: 'LastName' },
  { id: 'hobbies', numeric: false, disablePadding: false, label: 'Hobbies' },
  { id: 'birthDate', numeric: false, disablePadding: false, label: 'BirthDate' },
  { id: 'url', numeric: false, disablePadding: false, label: 'Profile' },
]
export const DEFAULT_URL = '/uploads/default.jpeg'
export const MAX_LENGTH = 30
export const NAME_REGEX = /^[a-zA-Z ]{2,30}$/
