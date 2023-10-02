require('dotenv').config()
require('./backend/config/database');

// Initialize express
const express = require('express')
const app = express()
const port = 8000

// Import Model from our models dir
// const Model = require('./models/model')

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