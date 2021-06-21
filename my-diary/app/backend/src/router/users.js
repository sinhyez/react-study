const express = require('express')
const controller = require('../controller/authController')
const router = express.Router()

router.post('/auth/signup', controller.createUser)
router.post('/auth/login', controller.login)

module.exports = router
