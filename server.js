const express = require('express')
const app = express()
const intuition = require('./intuition')
const sieve = require('./sieve')

// console.time('timer')
// sieve(2, 300)
// console.timeEnd('timer')

sieve(0, 200)

app.listen(3000, () => {
    console.log('server is running....')
})