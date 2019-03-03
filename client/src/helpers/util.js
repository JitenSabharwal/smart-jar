import axios from 'axios'

/**
 * Function to do a prepare request headers for anything required
 */
export const perpareHeader = () => {
  const id = localStorage.getItem('id_token')
  const config = {
    headers: {
      'Authorization': id ? `Bearer ${id}` : '',
    },
  }
  return config
}

/**
 * Function to do a post Request
 * @param {string} url
 * @param {object} payload
 */
export const postRequest = (url, payload) => {
  const headers = perpareHeader()
  return axios.post(url, payload, headers)
}

/**
 * Function to do a get Request
 * @param {string} url
 * @param {object} payload
 */
export const getRequest = (url, payload) => {
  const headers = perpareHeader()
  return axios.get(url, headers)
}
/**
 * Funtion to filter data out
 * @param {array} data [{id: 'redquired', ...container properties}]
 * @param {*} val
 * @param {string} key If not _id any other prop
 */
export const findUser = (data, val, key = '_id') => {
  return data.filter(u => u[key] === val)
}

/**
 * Functiom to load set an initial state
 */
export const loadInitailState = (url) => {
  return new Promise((resolve, reject) => {
    getRequest(url)
      .then(resp => {
        const {success, data} = resp.data
        if (!success) {
          // If there was a problem, we want to
          return reject(resp)
        } else {
          // If login was successful, set the token in local storage
          const state = {
            container: {
              list: data || [],
            },
          }
          resolve(state)
        }
      })
      .catch(err => {
        reject(new Error('Error: ', err))
      })
  })
}

/**
 * Function returns -1, 0, 1
 *  depending on the match of the
 *  property orderBy
 *  of elements a and b
 * @param {object} a
 * @param {object} b
 * @param {string} orderBy
 */
function desc (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}
/**
 * Function return a Function to sort elements
 * by orderBy
 * in the given order
 * @param {string} order 'desc/asc'
 * @param {string} orderBy '<string property of the sorting object>'
 */
export const getSorting = (order, orderBy) => {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)
}
