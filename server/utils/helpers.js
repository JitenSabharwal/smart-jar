const log = require('./logger/logger')
/**
 * Parse function to prepare output json
 * @param {object} obj {data: <object>, error:<boolean>, errorMsg: <String>}
 */
const parse = obj => {
  const result = {
    success: true,
  }
  if (obj.error) {
    result.success = false
    result.error = obj.error
  }
  result.data = obj.data
  return result
}

/**
 * Function creates output user object from the given data
 * @param {object} obj {
      itemName: String,
      quantity: String,
      timestamp: Date/String(DD/MM/YYYY),
    }
 */
const outputContainer = (arr) => {
  try {
    const containers = {
      itemName: arr[0].itemName,
      details: arr.map(a => ({quantity: a.quantity, timestamp: a.timestamp})).sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp)),
    }
    return containers
  } catch (e) {
    log.error(e)
  }
  return {}
}

module.exports = {
  parse,
  outputContainer,
}
