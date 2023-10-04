require('dotenv').config()
require('./backend/config/database.js');
const projectController = require('./backend/controllers/project');

// Initialize express
const express = require('express')
const app = express()
const port = 8000
const router = express.Router()

// Routes
router.get("/api/",                     projectController.getProjects) 
router.get('/api/projects/:projectId',  projectController.getProject)
router.post('/api/project',             projectController.setProject)
router.put('/api/:projectId',           projectController.updateProject)
router.delete('/api/:projectId',        projectController.deleteProject)

// Start server
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
