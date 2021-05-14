const express = require('express')
const cors = require('cors')
const userRouter = require('./router/users')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})