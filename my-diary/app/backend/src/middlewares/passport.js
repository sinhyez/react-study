//-------------------------------------------------------
// Passport Config
//-------------------------------------------------------

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const User = require('../models/userModel')

const LocalStrategyOptions = {
  usernameField: 'email',
  passwordFiled: 'password',
  session:  true,
  passReqToCallbakc: true
}

const localVerify = async (req, email, password, done) => {
  let user
  try {
    user = await User.findOne({ email }).exec()
    if (!user) return done(null, false, { message: '존재하지 않는 회원입니다.' })

    const passCheck = await bcrypt.compareSync(password, user.password)
    if (!passCheck) return done(null, false, { message: '비밀번호가 틀렸습니다.' })
  } catch (err) {    
    done(err)
  }
  return done(null, user)
}


module.exports = () => {
  passport.use(new LocalStrategy(LocalStrategyOptions, localVerify))
}

