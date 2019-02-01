const mongoose = require('mongoose')

const Item = new mongoose.Schema({
    _id: {type: String, required:true},
    name: {type: String, required: true},
    qty: {type: Number, required: true},
    location: {type: Array, required: true}
})

module.exports = mongoose.model('Item', Item)