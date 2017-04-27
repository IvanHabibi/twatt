var express = require('express');
var router = express.Router();
const twattController = require('../controllers/twattController');

/* GET users listing. */
router.get('/',twattController.recentTwatt)
router.get('/:place',twattController.searchTwatt)


module.exports = router;
