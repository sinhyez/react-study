//-------------------------------------------------------
// PostRouter
//-------------------------------------------------------

const express = require('express')
const router = express.Router()
const controller = require('../controller/postController')

router.get('/', controller.getAllPost)
router.get('/:id', controller.getOnePost)
router.post('/post', controller.postCreate)
// router.put('/post/edit/:id', controller)
// router.delete('/post/delete/:id', controller)

module.exports = router