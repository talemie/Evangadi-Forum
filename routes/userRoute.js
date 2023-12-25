const express = require('express')
const { login, checkUser, register } = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

// register route
router.post('/register', register)
// login route
router.post('/login', login)
// check route
router.get('/check',authMiddleware, checkUser)

module.exports=router