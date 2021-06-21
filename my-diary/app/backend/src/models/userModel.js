//-------------------------------------------------------
// UserModel
//-------------------------------------------------------

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

  email: {
    type: String,
  },
  username: {
    type: String,
  },
  confirm: {
    type: String,
  },
  password: {
    type: String,
  },
  nickname: {
    type: String,
  },
  admin: { 
    type: Boolean, default: false 
  }
}, {
  timestamps: true
})

userSchema.pre("save", async function(res, next) {
  try {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
  } catch (err) {
    console.log(err)
  }
})

const User = mongoose.model('user', userSchema)
module.exports = User