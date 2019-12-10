const express = require('express');
const router = express.Router();
const requestHeaderController = require('../controllers/requestHeaderController');


router.get('/');

router.get('/api/whoami', requestHeaderController.getHeader );

module.exports = router;