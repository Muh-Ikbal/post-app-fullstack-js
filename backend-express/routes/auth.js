const express = require('express');
const {login} = require('../controllers/LoginController')
const { validatedLogin } = require('../utils/validators/login');
const routerAuth = express.Router()

routerAuth.post('/login',validatedLogin,login)

module.exports = routerAuth