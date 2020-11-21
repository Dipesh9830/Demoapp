const express = require("express");
const auth = require('../controllers/auth')
const router = express.Router();

router.post('/login', auth.login)
router.get('/registration', auth.registration);
module.exports = router;