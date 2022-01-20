const routes = require('./routes')
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

// connecting the mongoab with the URI
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
//importing the routes and using it
app.use(routes)

app.listen(3000, () => {
    console.log('server is running....')
})