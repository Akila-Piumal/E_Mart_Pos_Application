const express = require('express')
const router = express.Router();
const LoginController = require('../controllers/loginController')

router.route('/signup')
    .post(LoginController.saveLogin)

router.route('/login')
    .post(LoginController.login)
    

module.exports = router;