var express = require('express');
var router = express.Router();

var PlayerController = require('../controllers/player_controller')

router.get('/', PlayerController.renderHome)
router.get('/players', PlayerController.getPlayers)
router.get('/create', (req, res) => {
    res.render('create')
})
router.post('/create', PlayerController.createPlayer)

module.exports = router;

// var express = require('express');
// var router = express.Router();

// const web3 = require('../../web3');
// const PlayerController = require('../controllers/player_controller')

// const registry_abi = [{"constant":false,"inputs":[{"internalType":"address","name":"owner_address","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"setOwnedByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getListedPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"player_address","type":"address"}],"name":"removeListed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner_address","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"removeListedByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner_address","type":"address"}],"name":"getPlayersForAddress","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"all_registry","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner_address","type":"address"}],"name":"getListedPlayersForAddress","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"player_address","type":"address"}],"name":"setListed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"listed_registry","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner_address","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"removeOwnedByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner_address","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"setListedByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"prev_owner","type":"address"},{"internalType":"address","name":"new_owner","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"changeOwners","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
// const registry_address = "0x997f354c8e50d9933d34b9711bb54c85a843352d"

// const registryContract = new web3.eth.Contract(registry_abi, registry_address);

// const address = "0xfac85294a5e75504220e8ac994b240b423b87a59"

// const positions = {
//   "1": "GK",
//   "2": "DF",
//   "3": "MF",
//   "4": "FW"
// }

// /* GET home page. */
// router.get('/', PlayerController.getPlayerInfo)

// // {
// //   player = await playerController.getPlayerInfo(player_abi, "0x48aca363feb9fd2411021426c60107c609cd07ee")

// //   console.log(player)
// //   // var player_list = [];
  
// //   // let player_address = await registryContract.methods.getPlayersForAddress(address).call()

// //   // for(var i = 0; i < player_address.length; i++) {
// //   //   let playerContract = new web3.eth.Contract(player_abi, player_address[i])

// //   //   player_list.push({
// //   //     name: await playerContract.methods.name().call(),
// //   //     position: positions[await playerContract.methods.position().call()],
// //   //     overall: await playerContract.methods.power_avg().call()
// //   //   })
// //   // }

// //   // console.log(player_list);
// //   res.render('index', { title: 'Etherfoot' });
// // });

// module.exports = router;
