const express = require('express')
const router = express.Router()
const {
  addContainer,
  findContainer,
  findContainers,
  removeContainer,
  removeAllContainer,
} = require('../controllers/containers')

const { parse } = require('../utils/helpers')
const log = require('../utils/logger/logger')
const upload = require('../utils/fileStorage')

/**
 * Get Request: To get all the Containers
 */
router.get('/', (req, res, next) => {
  findContainers(req).then(parse).then(result => res.send(result)).catch(e => {
    log.error(e)
    res.send(parse({ error: e }))
  })
})

/**
 * Get Request: To get Container of given Id
 */
router.get('/get/:container', (req, res, next) => {
  const {params} = req
  const {itemName} = params
  findContainer(itemName).then(parse).then(result => res.send(result)).catch(e => {
    log.error(e)
    res.send(parse({ error: e }))
  })
})

/**
 * POST Request: To add a new user
 */
router.post('/addContainer/', upload.single('profilePic'), (req, res, next) => {
  const {body} = req
  try {
    addContainer(body)
      .then(parse)
      .then(result => res.send(result))
      .catch(e => {
        log.error(e)
        res.send(parse({ error: e }))
      })
  } catch (e) {
    log.error(e)
  }
})

/**
 * POST Request: To remove a user
 */
router.post('/removeContainer/:name', (req, res, next) => {
  removeContainer(req.params.name)
    .then(resp => {
      res.send(parse(resp))
    })
    .catch(e => {
      const result = {}
      result.error = e.toString()
      res.send(parse(result))
    })
})

/**
 * POST Request: To remove all the users
 */
router.post('/removeAllContainers/', (req, res, next) => {
  removeAllContainer()
    .then(resp => {
      res.send(parse(resp))
    })
    .catch(e => {
      const result = {}
      result.error = e.toString()
      res.send(parse(result))
    })
})

module.exports = router
