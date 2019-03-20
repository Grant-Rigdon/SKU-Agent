const express = require("express")
const session = require("express-session")
const mongoose = require('mongoose')
const passport = require('./config/passport')
const routes = require("./routes")
const app = express()
const PORT = process.env.PORT || 3001


// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }))
// Configure passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}
// Add routes, both API and view
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/skuAgent" || 'mongodb+srv://grant:stuff@cluster0-iyij8.mongodb.net/test?retryWrites=true')

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
