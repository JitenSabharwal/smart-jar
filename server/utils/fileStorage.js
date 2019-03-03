const multer = require('multer')
// Creating a storage configuration
const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
/**
 * Filters files that don't match the confition
 * @param {object} req
 * @param {object} file
 * @param {function} cb
 */
function filterFiles (req, file, cb) {
  if (file.mimetype.indexOf('image') >= 0) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
const upload = multer({
  storage,
  fileFilter: filterFiles,
})

module.exports = upload
