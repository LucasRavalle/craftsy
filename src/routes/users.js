const express = require('express');
const router = express.Router();
const {login, register, processRegister, processLogin, check} = require('../controllers/usersController')
const validate= require('../middlewares/validateRegister')
const guestUser = require('../middlewares/guestUser')

/* GET users listing. */

// CREATE USER

router.get('/register', guestUser, register)
router.post('/register', validate, processRegister)


//LOGIN USER
router.get('/login', guestUser, login);
router.post('/login', processLogin)

//Chequear si el usuario está logueado
router.get('/logueado', check)

module.exports = router;
