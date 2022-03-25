const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');



router.post('/signup', usersCtrl.create)
router.post('/login', usersCtrl.login)

router.get('/', usersCtrl.index)
router.get('/profile', usersCtrl.profile)
router.get('/new', usersCtrl.newTourney)
router.get('/tournament:id', usersCtrl.showTourney)


module.exports = router;