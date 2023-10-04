const { Schema } = require('mongoose');

const projectSchema = new Schema({
    // projectId: {
    //     type: Schema.Types.ObjectId,
    //     required: true
    // },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    result: {
        type: String,
        required: true
    },
    notes: String,
    rootEl: String,
    scaleEl: String,
    tonesEl: String,
    bpmEl: Number,
    soundEl: String,
}, {
    timestamps: true
})

module.exports = projectSchema;