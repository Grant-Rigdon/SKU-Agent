const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new mongoose.Schema({
    _id: {type: String, required:true},
    name: {type: String, required: true},
    location: [{
        type: Schema.Types.ObjectId,
        ref: 'Storage',
        }]
})

module.exports = mongoose.model('Item', Item)