const router = require("express").Router();
const db = require('../../models')


router.route('/')
    .get((req, res) => {
        db.Storage
            .find(req.query)
            .then(storage => res.json(storage))
    })
    .post((req, res) => {        
        db.Storage
            .create(req.body)
            .then(location => res.json(location))
    })

module.exports = router
