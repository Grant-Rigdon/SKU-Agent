const router = require("express").Router()
const db = require('../../models')


router.route('/')
    .get((req, res) => {        
        db.Storage            
            .find({})
            .populate("items.item")
            .then(storage => res.json(storage))
    })
    .post((req, res) => {        
        db.Storage
            .create(req.body)
            .then(storage => res.json(storage))
    })
    .patch((req,res) => {        
        const storage = db.Storage.updateOne({_id: req.body.location}, { $push: { items: {item: req.body.item, quantity: req.body.quantity}}})
        const item = db.Item.updateOne({_id: req.body.item}, { $push: { location: req.body.location}})                      
        storage.then(storage => res.json(storage)) 
        item.then(item => res.json(item))            
    })
router.route('/:storage')    
    .patch((req, res) => {                       
        const storage = db.Storage.updateOne( { _id: req.params.storage }, { $pull: {items:{ item: req.body.id}}})
        const item = db.Item.updateOne({_id: req.body.id}, {$pull: {location: req.params.storage}})
        storage.then(item.then(item => res.json(item)))
        
    })

module.exports = router
