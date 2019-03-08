let mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose')
const bcrypt = require('bcrypt-nodejs')

const User = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isManager: {type: Boolean, required: true}
})

User.pre('save', function (next) {
  const user = this,
    SALT_FACTOR = 5

  if (!user.isModified('password')) return next()

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

// Method to compare password for login
User.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err) }

    cb(null, isMatch)
  })
}
User.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', User)