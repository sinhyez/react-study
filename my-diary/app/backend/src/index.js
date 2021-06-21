//-------------------------------------------------------
// AppIndex
//-------------------------------------------------------

const express = require('express')
const cors = require('cors')
const userRouter = require('./router/users')
const postRouter = require('./router/post')
const db = require('./db/dbMongoose')
const passport = require('passport')
const passportConfig = require('./middlewares/passport')
const session = require('express-session')
const errorHandler = require('./middlewares/error')

const port = process.env.PORT
const app = express()

const dotenv = require('dotenv').config()

app.use(express.json())
app.use(cors())

//passport
// serializeUser는 로그인 성공시 실행되는 done에서 user객체를 전달받아 session에 저장
passport.serializeUser((user, done) => { // strategy 성공시 호출
  done(null, user._id) // user._id. => req.session.passport.user 로 저장
})
// deserializeUser는 실제 서버로 들어오는 요청마다 세션정보를 실제 db의 데이터와 비교
// 해당하는 유저가 있으면 done의 두번째 인자를 req.user로 저장후 요청 처리시 req.user로 리턴함
passport.deserializeUser((id, done) => { // id는 req.session.passport.user에 저장된 값
  require('./models/userModel').User.findById(id)
    .then(user => done(null. user)) // user가 req.user 로 리턴
    .catch(err => done(err, null))
})


app.use(session({
  secret: 'my diary',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 1000
  }
}))
app.use(passport.initialize())
passportConfig()
app.use(passport.session())

app.use(userRouter)
app.use(postRouter)

app.use(errorHandler.errorHandle)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})