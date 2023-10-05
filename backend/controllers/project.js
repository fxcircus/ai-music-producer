const Project = require('../models/Project') 

// GET all projects
const getProjects = (req, res) => {
    Project.find({}, (err, foundProject) => {
        if (!err) {
          res.status(200).json(foundProject)
        } else {
          res.status(400).json(err)
        }
    })
}

// GET project by projectId
const getProject = (req,res) => {
    Project.find({projectId: req.params.projectId}, (err, foundProject) => {
        if (!err) {
          res.status(200).json(foundProject)
        } else {
          res.status(400).json(err)
        }
    })
}

// POST
const setProject = async (req, res) => {
  console.log("New POST req!")
    try {
        const { body } = req
        const createdProject = await Project.create(body)
        res.status(200).json({ message: "Project Created!", createdProject })
    } catch (error) {
        res.status(400).json({ err: error.message })
    }
}

// PUT
const updateProject = (req, res) => {
    const { body } = req 
    Project.findByIdAndUpdate(req.params.id, body,{new: true}, (err, updatedProject) => {
        if (!err) {
          res.status(200).json(updatedProject)
        } else {
          res.status(400).json(err)
        }
    })
}

// DELETE
const deleteProject = (req, res) => {
    Project.findByIdAndDelete(req.params.projectId, (err) => {
        if (!err) {
            res.status(200).json({ message: "Deleted project" })
          } else {
            res.status(400).json(err)
          }
    })
}

module.exports = {
    getProjects,
    getProject,
    setProject,
    updateProject,
    deleteProject
}
