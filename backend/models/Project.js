const mongoose = require('mongoose');

// Define the schema for the Project model
const projectSchema = new mongoose.Schema({
    userId: String,
    result: {
        type: String,
        required: true
    },
    notes: String,
    rootEl: String,
    scaleEl: String,
    tonesEl: String,
    bpmEl: Number,
    soundEl: String
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
