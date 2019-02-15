const router = require("express").Router()
const homeRoutes = require('./home')
const queueRoutes = require('./queue')
const itemRoutes = require('./item')
const signup = require("./signup")
const login =require("./login")



router.use("/home", homeRoutes)
router.use("/queue", queueRoutes)
router.use("/item", itemRoutes)
router.use("/signup", signup)
router.use("/login", login)


module.exports = router
