let mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isManager: {type: Boolean, required: true}
})
User.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', User)