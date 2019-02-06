const router = require("express").Router()
const homeRoutes = require('./home')
const queueRoutes = require('./queue')
const itemRoutes = require('./item')

router.use("/home", homeRoutes)
router.use("/queue", queueRoutes)
router.use("/item", itemRoutes)

module.exports = router;
