require('dotenv').config()
require('./backend/config/database');
const projectController = require('../../controllers/api/projects');


// Initialize express
const express = require('express')
const app = express()
const port = 8000
const router = express.Router()

router.get("/", getProject) 
router.get('/projects/:projectId', getProject)
//
router.post('/', setProject)
//  Update
router.put('/:projectId', updateProject)
// delete
router.delete('/:projectId', deleteProject)


// start the server
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})