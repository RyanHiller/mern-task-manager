const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes.js')
require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT || 3001

// Middleware
app.use(express.json())

// Routes
app.use('/api/tasks', routes)

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
