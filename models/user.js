const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isManager: { type: Boolean, required: true }
})

// User.pre('save', function () {
//   this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null)
// })

// User.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password)
// }

module.exports = mongoose.model('User', User)