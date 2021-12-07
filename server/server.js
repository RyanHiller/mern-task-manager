const express = require('express')
const routes = require('./routes/routes.js')

const app = express()
const port = process.env.SERVER_PORT || 3001

// Middleware
app.use(express.json())

app.get('/test', (req, res) => {
  res.send('Test successful')
})

// Routes
app.use('/api/tasks', routes)

app.listen(port, console.log(`Listening on port ${port}`))
