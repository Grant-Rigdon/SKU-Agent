const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Storage = new Schema({
    name: { type: String, required: true },
    items: [{
        type: Schema.Types.String,
        ref: "Item",
        },{quantity: Number}]

})

module.exports = mongoose.model('Storage', Storage)