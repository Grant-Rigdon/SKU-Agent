const router = require("express").Router();
const db = require('../../models')


router.route('/')
    .get((req, res) => {        
        db.Storage            
            .find(req.query)
            .populate("items")
            .then(storage => res.json(storage))
    })
    .post((req, res) => {        
        db.Storage
            .create(req.body)
            .then(storage => res.json(storage))
    })
    .patch((req,res) => {
        console.log(req.body)
        db.Storage
            .updateOne({_id: req.body.location}, { $push: { items:  req.body.item, quantity: req.body.quantity}})
            .then(storage => res.json(storage))
    })

module.exports = router
