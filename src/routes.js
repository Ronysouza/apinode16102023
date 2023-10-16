const express = require('express')
const router = express.Router()

const UserController = require('./controllers/UserController.js')

router.get('/user',UserController.getUser)
//router.get('/atualizou',UserController.getAtualizou)
//router.get('/getuser',UserController.funcaoGetUse)

module.exports = router


