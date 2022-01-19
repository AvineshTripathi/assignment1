const routes = require('./routes')
const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
   
// console.time('timer')
// sieve(2, 300)
// console.timeEnd('timer')
app.use(cors())
app.use(routes)

app.listen(3000, () => {
    console.log('server is running....')
})