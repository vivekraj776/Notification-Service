const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

router.post('/welcome-email', controller.welcomeEmail);

module.exports = router;
