const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes.js')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT || 3000

// Routes
app.use('/api/tasks', routes)

// Middleware
app.use(express.static('./public'))
app.use(cors())
app.use(express.json())
app.use(notFound)
app.use(errorHandler)

// only starts server if DB connection is good
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    app.listen(port, console.log(`Listening on port ${port}`))
  } catch (err) {
    console.log(err)
  }
}

start()
