require('dotenv').config()
require('./backend/config/database');
const projectController = require('./backend/controllers/project');

// Initialize express
const express = require('express')
const app = express()
const port = 8000
const router = express.Router()

// Routes
router.get("/", getProject) 
router.get('/projects/:projectId', getProject)
router.post('/', setProject)
router.put('/:projectId', updateProject)
router.delete('/:projectId', deleteProject)

// Start server
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
