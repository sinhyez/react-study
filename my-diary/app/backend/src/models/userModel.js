//-------------------------------------------------------
// UserModel
//-------------------------------------------------------

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  email: String,
  username: String,
  password: String,
  nickname: String,
  admin: { 
    type: Boolean, default: false 
  }
}, {
  timestamps: true
})

const User = mongoose.model('user', userSchema)
module.exports = User