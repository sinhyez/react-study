//-------------------------------------------------------
// AuthController
//-------------------------------------------------------
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

// @path /auth/signup
// @method Post
// @desc User Create Controller
exports.createUser = async (req, res) => {
  const { email, password, confirm, username, nickname } = req.body
  let user

  try {
    user = await User.find({ email }).exec()
    if (user) return res.status(400).send({ message: "이미 존재하는 사용자 입니다." })

    if (password !== confirm) return res.status(400).send({ message: "비밀번호가 일치하지 않습니다." })
    delete confirm

    user = new User({ email, username, nickname })
  } catch (err) {

  }
}