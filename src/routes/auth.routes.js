const express = require('express')
const router = express.Router();
const authService = require('../services/auth.service')
const authController = require('../controllers/auth.controller')


router.post('/register', authController)
//yes so now is the time to use those middlewares which are being used for bodyparser
module.exports = router;