const express = require('express')
const router = express.Router()
const projectController = require('../controllers/project');

router.post('/',             projectController.setProject)
router.get("/",              projectController.getProjects) 
router.get('/:projectId',    projectController.getProject)
router.put('/:projectId',    projectController.updateProject)
router.delete('/:projectId', projectController.deleteProject)

module.exports = router
