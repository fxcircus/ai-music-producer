require('dotenv').config()
require('./backend/config/database.js');
const express = require('express')
const cors = require('cors');
const logger = require('morgan')

// Init Express
const app = express()

// Middleware
app.use(cors());
app.use(logger('dev'))
app.use(express.json())
app.use('/api/projects', require('./backend/routes/projects_routes.js'))

// Start server
const port = 8000
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
