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
        console.log(req.body)
        db.QueueItem
            .create(req.body)
            .then(queueItem => res.json(queueItem))
    }) 
    .delete((req, res) => {
        db.QueueItem
        .deleteOne({_id: req.params.id})
        .exec((err, doc) => {
            if (err) {
              console.log(err)
            }
            else {
              res.send(doc)
            }
        })
    })

module.exports = router;
