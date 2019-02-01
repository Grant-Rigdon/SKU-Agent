const router = require("express").Router()
const homeRoutes = require('./home')

// router.use("/books", bookRoutes);
router.use("/home", homeRoutes)

module.exports = router;
