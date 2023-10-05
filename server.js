require('dotenv').config()
require('./backend/config/database.js');
const projectController = require('./backend/controllers/project');

// Initialize express
const express = require('express')
const app = express()
const port = 8000
const router = express.Router()
const cors = require('cors');
app.use(cors());

// Routes
router.get("/api/projects",                 projectController.getProjects) 
router.get('/api/projects/:projectId',      projectController.getProject)
router.post('/api/project',                 projectController.setProject)
router.put('/api/projects/:projectId',      projectController.updateProject)
router.delete('/api/projects/:projectId',   projectController.deleteProject)

// Start server
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})
