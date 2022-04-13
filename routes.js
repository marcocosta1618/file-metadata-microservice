const express = require('express')
const router = express.Router()
const multer = require('multer')
const createError = require('http-errors')

const upload = multer()

// GET requests at root - initial page
router.get('/', (req, res) => {
   res.sendFile(__dirname + '/views/index.html')
})

router.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
   res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
   })
})

// ERRORS HANDLERS (see https://zellwk.com/blog/express-errors/ ):
// endpoint not found (404)
router.use((req, res, next) => {
   next(createError(404))
})
// all other errors
router.use((error, req, res, next) => {
   res.status(error.status || 500)
   res.json({
      status: error.status,
      message: error.message,
      stack: error.stack
   })
})

module.exports = router