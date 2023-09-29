const mongoose = require('mongoose')

const taskModel = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    taskDescription: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
})

taskModel.set('timestamps', true)

module.exports = mongoose.model('task', taskModel);
