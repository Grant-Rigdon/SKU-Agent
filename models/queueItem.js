const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QueueItem = new mongoose.Schema({
    _id: {type: String, required:true},
    name: {type: String, required: true},
    location: [{
        type: Schema.Types.ObjectId,
        ref: 'Storage',
        }],
    quantity: Number
})

module.exports = mongoose.model('QueueItem', QueueItem)