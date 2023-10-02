require('dotenv').config()
// console.log(process.env.MONGO_URI) // prints the mongoDB URL string

// Initialize express
const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')

// Import Model from our models dir
// const Model = require('./models/model')

// models
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// Add a route with MongoDB
// app.get('/', (req, res) => {
//     Model.find({}, (err, foundModels) => {
//         if (err) {
//             res.status(400).send(err)
//         } else {
//             res.render(`fruits/Index`, {
//                 models: foundModels
//             })
//         }
//     })
// }

// start the server
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})