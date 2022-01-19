const mongoose = require('mongoose')

const data = mongoose.Schema({
    prime : {
        type: [Number],
        required: true,
    },
    execution: {
        type: mongoose.Decimal128,
        required: true,
    },
    date: Date
})


module.exports = mongoose.model('data', data);