const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
// Configure passport-local to use User model for authentication
const User = require('../models/user');

passport.use(new LocalStrategy(
    { usernameField: "email" },
    function (email, password, done) {
        User.find({ email: email }, function (err, user) {
            if (err) {
                return done(err)
            } else if (!user.length) {
                return done(null, false, { message: "Incorrect Username" })
            } else if (user[0].password !== password) {
                return done(null, false, { message: "Invalid Password" })
            }
            return done(null, user)
        })
    }
))

passport.serializeUser(function (user, cb) {
    cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
    cb(null, obj)
})

module.exports = passport