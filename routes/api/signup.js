const router = require("express").Router()
const db = require('../../models')

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
router.route("/")
  .post((req, res) => {                
      db.User.create({
        username: req.body.email,
        password: req.body.password,
        isManager: req.body.isManager
      }).then(function() {
        res.send("Success")
      }).catch(function(err) {
        console.log(err)
        return res.json(err)
  })
  
})

module.exports = router