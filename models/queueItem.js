const mongoose = require('mongoose')

const QueueItem = new mongoose.Schema({
    _id: {type: String, required:true},
    name: {type: String, required: true},
    location: {type: Array, required: true},
    quantity: Number
})

module.exports = mongoose.model('QueueItem', QueueItem)