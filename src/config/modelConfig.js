const mongoose = require('mongoose')

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected ✔')
})
mongoose.connection.on('error', (error) => {
    console.log("Mongoose connection error 💢")
    console.log(`Error: ${error.message}`)
})
