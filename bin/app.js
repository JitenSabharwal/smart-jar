const server = require('../server/server')
const log = require('../server/utils/logger/logger')
const port = process.env.PORT || 8080
// Getting the express server
const app = server()
// Start listening server
app.listen(port, () => {
  log.info('running at localhost: ' + port)
})
