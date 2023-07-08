const express = require('express')
const router = express.Router();
const LoginController = require('../controllers/loginController')

router.route('/login')
    .post(LoginController.saveLogin)
    .get(LoginController.getLoginDetails)
    

module.exports = router;