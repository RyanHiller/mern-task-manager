const express = require('express')
const routes = require('./routes/routes.js')
const connectDB = require('./db/connect')
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
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Listening on port ${port}`))
  } catch (err) {
    console.log(err)
  }
}

start()
