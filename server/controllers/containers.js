const Container = require('../models/containers')
const proj = 'itemName quantity timestamp'
const {outputContainer} = require('../utils/helpers')
/**
 * Function to add a new Container
 * @param {object} req
 */
const addContainer = (body) => {
  return new Promise((resolve, reject) => {
    body.timestamp = +new Date()
    const container = new Container(body)
    return container.save((err, resp) => {
      if (err) reject(err)
      else {
        findContainer(body.itemName).then(resolve)
      }
    })
  })
}

/**
 * Function to all Containers
 */
const findContainers = (req) => {
  return new Promise((resolve, reject) => {
    Container.find({}, proj, (err, resp) => {
      if (err) reject(err)
      const result = resp.reduce((acc, val) => {
        const {itemName} = val
        if (!acc[itemName]) {
          acc[itemName] = []
        }
        acc[itemName].push(val)
        return acc
      }, {})
      return resolve({ data: Object.values(result).map(u => outputContainer(u)) })
    })
  })
}
/**
 * Function to find Container of given id
 * @param {string} id
 */
const findContainer = (itemName) => {
  return new Promise((resolve, reject) => {
    Container.find({itemName}, (err, resp) => {
      if (err) reject(err)
      return resolve({ data: outputContainer(resp) })
    })
  })
}

/**
 * Function to remove Container of given id
 * @param {string} id
 */
const removeContainer = (itemName) => {
  return new Promise((resolve, reject) => {
    Container.deleteOne({ itemName }, (err, resp) => {
      if (err) reject(err)
      return resolve({ data: 'Done' })
    })
  })
}

/**
 * Function to remove Container of given id
 * @param {string} id
 */
const removeAllContainer = () => {
  return new Promise((resolve, reject) => {
    Container.deleteMany({}, (err, resp) => {
      if (err) reject(err)
      return resolve({ data: 'Done' })
    })
  })
}
module.exports = {
  addContainer,
  findContainers,
  findContainer,
  removeContainer,
  removeAllContainer,
}
