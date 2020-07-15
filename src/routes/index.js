const router = require('express').Router();

const users = require('../controllers/users')
const wikipedia = require('../controllers/wikipedia')

// Users
router.get('/users', users.get)

// Wikipedia
router.get('/wikipedia', wikipedia.get)

module.exports = router
