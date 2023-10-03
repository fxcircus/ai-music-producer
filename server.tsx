require('dotenv').config()
require('./backend/config/database');
const projectController = require('./backend/controllers/project');

// Initialize express
const express = require('express')
const app = express()
const port = 8000
const router = express.Router()

// Routes
router.get("/", projectController.getProjects) 
router.get('/projects/:projectId', projectController.getProject)
router.post('/', projectController.setProject)
router.put('/:projectId', projectController.updateProject)
router.delete('/:projectId', projectController.deleteProject)

// Start server
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
