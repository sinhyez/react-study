//-------------------------------------------------------
// Passport Config
//-------------------------------------------------------

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const User = require('../models/userModel')

// @desc passport authenticate custom settings 
// @desc this options and verify is only local strategy options

const LocalStrategyOptions = {
  usernameField: 'email',
  passwordFiled: 'password',
  session:  true,
  passReqToCallback: true
}

const localVerify = async (req, email, password, done) => {

  try {
    const user = await User.findOne({ email: email }).exec()
    if (!user) return done(null, false, { message: '존재하지 않는 회원입니다.' })
    
    const passCheck = await bcrypt.compareSync(password, user.password)
    if (passCheck) return done(null, user)

    done(null, false, { message: '비밀번호가 틀렸습니다.' })
  } catch (err) {   
    console.log(err) 
    done(err)
  }
}

module.exports = () => {
  passport.use(new LocalStrategy(LocalStrategyOptions, localVerify))
}

