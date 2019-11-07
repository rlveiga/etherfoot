var express = require('express');
var router = express.Router();

var PlayerController = require('../controllers/player_controller')

router.get('/', PlayerController.renderHome)

router.get('/players', PlayerController.renderPlayerPage)
router.post('/players', PlayerController.createPlayer)

router.post('/list_player/:index', PlayerController.listPlayer)
router.post('/unlist_player/:index', PlayerController.unlistPlayer)

router.get('/market', PlayerController.renderMarketPage)
module.exports = router;
