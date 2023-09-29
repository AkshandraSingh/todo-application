require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

require('./config/modelConfig')
const taskRouter = require('./routes/taskRouter')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', taskRouter)

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log('Express.js server is running on ', PORT)
})
