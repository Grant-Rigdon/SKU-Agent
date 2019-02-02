const router = require("express").Router()
const homeRoutes = require('./home')
const queueRoutes = require('./queue')


router.use("/home", homeRoutes)
router.use("/queue", queueRoutes)

module.exports = router;
