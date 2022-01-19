const mongoose = require('mongoose')

const data = mongoose.Schema({
    array : {
        type: [Number],
        required: true,
    },
    execution: {
        type: mongoose.Decimal128,
        required: true,
    },
    date: string
})


module.exports = mongoose.model('data', data);