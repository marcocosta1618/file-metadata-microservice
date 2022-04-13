const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const favicon = require('serve-favicon')

// static assets
app.use(favicon(__dirname + '/public/icons8-code-64.png'))
app.use(express.static(__dirname + '/public'))

// enable cors, for fCC remote testing
const cors = require('cors')
app.use(cors({ optionsSuccessStatus: 200 }))

// all requests to express.Router()
app.use('/', routes)

// port listener
app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
})