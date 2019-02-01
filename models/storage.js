const mongoose = require('mongoose')

const Storage = new mongoose.Schema({    
    name: {type: String, required: true},
    items: [{
        type: Schema.Types.ObjectId,
        ref: "Item"
    }]
    
})

module.exports = mongoose.model('Storage', Storage)