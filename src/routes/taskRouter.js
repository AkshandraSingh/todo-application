const express = require('express')

const taskController = require('../controllers/taskController')

const taskRouter = express()

taskRouter.post('/addTask', taskController.addTask)
taskRouter.post('/removeTask', taskController.removeTask)
taskRouter.get('/allTask', taskController.allTask)

module.exports = taskRouter
