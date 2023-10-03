const { Schema } = require('mongoose');

const projectSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gptResponse: {
        type: String,
        required: true
    },
    userEmail: String,
    title: String,
    timeVal: Number,
    rootVal: String,
    scaleVal: String,
    tonesVal: String,
    bpmVal: Number,
    soundVal: String,
    itemsVal: Array,
    notesVal: String,
}, {
    timestamps: true
})

module.exports = projectSchema;