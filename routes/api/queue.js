const router = require("express").Router();
const db = require('../../models')

router.route('/')
    .get((req, res) => {
        db.QueueItem
            .find(req.query)
            .populate({
                path: 'location',
                model: 'Storage'
            })
            .then(queueItem => res.json(queueItem))
    })
    .post((req, res) => {        
        db.QueueItem
            .create(req.body)
            .then(queueItem => res.json(queueItem))
    })
router.route('/:id') 
    .delete((req, res) => {                
        db.QueueItem
        .deleteOne({_id: req.params.id})
        .then(queueItem => res.json(queueItem))
    })

module.exports = router;
