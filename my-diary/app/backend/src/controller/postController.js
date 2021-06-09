//-------------------------------------------------------
// PostController
//-------------------------------------------------------
const Post = require('../models/postModel')

// @method Get
// @path http://localhost:8090/
// GetController
exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find({})
    return res.status(200).send(posts)
  } catch (err) {
    next(err)
  }
}

// @Method Get
// @path http://localhost:8090/:id
// @desc GetOnePost
exports.getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id })
    return res.status(200).send(post)
  } catch(err) {
    next(err)
  }
}

// @metod Post
// @path http://localhost:8090/post
// @desc PostController
exports.postCreate = async (req, res) => {
  const { title, message } = req.body
  const post = new Post({ title, message })
  await post.save(post)
    .then(post => res.status(201).send(post))
    .catch(err => res.status(400).send({
      message: err.message || "에러에러"
    }))
}

// @method put
//@path http://localhost:8090/post/edit/:id
exports.postEdit =  async (req, res, next) => {
  const { title, message } = req.body
  await Post.findOneAndUpdate({ _id: req.params.id }, req.body)
}