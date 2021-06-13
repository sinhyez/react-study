//-------------------------------------------------------
// UserModel
//-------------------------------------------------------

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  confirm: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  admin: { 
    type: Boolean, default: false 
  }
}, {
  timestamps: true
})

const User = mongoose.model('user', userSchema)
module.exports = User