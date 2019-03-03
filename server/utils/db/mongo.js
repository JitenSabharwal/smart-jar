const mongoose = require('mongoose')
const config = require('../../../config/config')
const logger = require('../logger/logger')
mongoose.Promise = global.Promise
// Getting the App Env for mongoUrl
const _nodeEnv = process.env.NODE_ENV || 'development'
const {mongoUrl} = config[_nodeEnv]
// Connecting to mongo
const connection = mongoose.connect(mongoUrl, { useNewUrlParser: true })

connection
  .then(db => {
    logger.info(
      `Successfully connected to ${mongoUrl} MongoDB cluster in ${
        _nodeEnv
      } mode.`
    )
    return db
  })
  .catch(err => {
    if (err.message.code === 'ETIMEDOUT') {
      logger.info('Attempting to re-establish database connection.')
      mongoose.connect(config.mongoUrl)
    } else {
      logger.info('Error while attempting to connect to database:')
      logger.error(err.toString())
    }
  })

module.exports = connection
