//-------------------------------------------------------
// Connet DataBase
//-------------------------------------------------------

const mongoose = require('mongoose')
const { DB_HOST, options } = require('./config')
const dbHandle = mongoose.connect(DB_HOST, options)
mongoose.set('autoIndex', process.env.NODE_ENV === 'devleopment')
mongoose.set('autoCreate', process.env.NODE_ENV === 'devleopment')

module.exports = dbHandle