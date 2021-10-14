const express = require('express');
const router = express.Router();
const {login, register, processRegister} = require('../controllers/usersController')
const validate= require('../middlewares/validateRegister')

/* GET users listing. */

// CREATE USER

router.get('/register', register)
router.post('/register', validate, processRegister)


//LOGIN USER
router.get('/login', login);

module.exports = router;
