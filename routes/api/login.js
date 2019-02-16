const router = require("express").Router()
const passport = require('../../config/passport')
const User = require('../../models/user')

router.route("/")
    .post(passport.authenticate("local"), function (req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        User.find({ email: req.body.email }, function () {
            res.send("Success")
        })
    })

module.exports = router