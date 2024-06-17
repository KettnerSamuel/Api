const router = require('express').Router();

router.use('*', require('../controllers/lobbyController').index);

module.exports = router;
