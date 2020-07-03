const router = require('express').Router();

const users = require('../controller/users')

// Users
router.get('/users', users.get)

module.exports = router;
