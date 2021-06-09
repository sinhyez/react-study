//-------------------------------------------------------
// PostModel
//-------------------------------------------------------

const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

  title: {
    type: String,
    // require: true
  },
  message: {
    type: String,
    // require: true
  }
}, {
  timestamps: true
})

const Post = mongoose.model('post', postSchema)
module.exports = Post