//-------------------------------------------------------
// PostController
//-------------------------------------------------------
const Post = require('../models/postModel')

// @method Get
// @path http://localhost:8090/
// @desc Get All PostList
exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find({})
    return res.send(posts)
  } catch (err) {
    next(err)
  }
}

// @Method Get
// @path http://localhost:8090/:id
// @desc Get One Post
exports.getOnePost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id }).exec()
    return res.send(post)
  } catch (err) {
    next(err)
    console.log(err)
  }
}

// @metod Post
// @path http://localhost:8090/post
// @desc Post Create
exports.postCreate = async (req, res, next) => {
  const { title, message, username } = req.body
  
  const newPost = new Post({ title, message, username })
  try {
    const result = await newPost.save()
    return res.send(result)
  } catch (err) {
    next(err)
    console.log(err)
  }
}

// @method put
// @path http://localhost:8090/post/edit/:id
// @desc Update Post
exports.postEdit =  async (req, res, next) => {
  const { title, message } = req.body
  const { id: _id } = req.params

  try {
    const result = await Post.findOneAndUpdate({ _id }, { title, message }, { new: true }).exec()
    return res.send(result)
  } catch (err) {
    next(err)
    console.log(err)
  }
}

// @method delete
// @path http://localhost:8090/post/delete/:id
// @desc Delete Post
exports.postDelete = async (req, res, next) => {
  const { id: _id } = req.params

  try {
    await Post.findOneAndDelete({ _id }).exec()
    return res.send({ message: 'delete success' })
  } catch (err) {
    next(err)
  }
}