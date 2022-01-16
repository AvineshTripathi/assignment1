const express = require('express')
const app = express()
const intuition = require('./intuition')

intuition(2, 30)

app.listen(8000, () => {
    console.log('server is running....')
})