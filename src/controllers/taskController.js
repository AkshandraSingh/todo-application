const path = require('path')

const taskModel = require('../models/taskModel')

module.exports = {
    addTask: async (req, res) => {
        try {
            const taskData = new taskModel(req.body)
            await taskData.save()
            res.sendFile(path.join(__dirname, '..', "..", 'client', 'html', 'mainPage.html'));
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Error!",
                error: error.message,
            })
        }
    },
    removeTask: async (req, res) => {
        try {
            const { taskName } = req.body
            const taskData = await taskModel.findOneAndDelete({
                taskName: taskName
            })
            res.sendFile(path.join(__dirname, '..', "..", 'client', 'html', 'mainPage.html'));
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Error!",
                error: error.message,
            })
        }
    },
    allTask: async (req, res) => {
        try {
            const allTaskData = await taskModel.find({})
            res.sendFile(path.join(__dirname, '..', "..", 'client', 'html', 'allTask.html'));
            res.json(allTaskData); // Send the data as JSON
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Error!",
                error: error.message,
            })
        }
    }
}
