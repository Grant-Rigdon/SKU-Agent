const router = require("express").Router();
const db = require('../../models')


router.route('/')
    .get((req, res) => {
        db.Item
            .find(req.query)
            .populate("storages")
            .then(item => res.json(item))
    })
    .post((req, res) => {        
        db.Item
            .create(req.body)
            .then(item => res.json(item))
    })
    

module.exports = router
