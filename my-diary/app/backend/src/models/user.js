const mongoose = require('mongoose')

const user = new mongoose.Schema({
  useremail: String,
  username: String,
  password: String,
  admin: {type: Boolean, default: false}
})