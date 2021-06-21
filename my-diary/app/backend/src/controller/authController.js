//-------------------------------------------------------
// AuthController
//-------------------------------------------------------
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const passport = require('passport')

// @path /auth/signup
// @method Post
// @desc User Create Controller
exports.createUser = async (req, res, next) => {
  const { email, password, confirm, username, nickname } = req.body

  let user 
  user = await User.findOne({ email: email }).exec()
  if (user) return res.status(400).send({ message: "이미 존재하는 사용자 입니다." })

  if (password !== confirm) return res.status(400).send({ message: "비밀번호가 일치하지 않습니다." })
  delete confirm

  user = new User({ 
    email, username, nickname, password })  

  try {
    const result = await user.save()
    return res.send({result: result, message: "success!!"})
  } catch (err) {
    console.log(err)
    return next(err)
  }
}

// @path /auth/login
// @method Post
// @desc Login Controller
exports.login = async (req, res, next) => {
  try {
    passport.authenticate('local', (err, user, info) => {
      if(err || !user) return next(err)

      req.login(user, { session: true }, (err) => {
        if(err) return next(err)
      }, res.send(user))

    })(req, res, next)
  } catch (err) {
    console.log(err)
    next(err)
  }
}