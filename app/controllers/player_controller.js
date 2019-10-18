const PlayerService = require('../services/player_service')
const ABI = require('../constants/abis');
const web3 = require('../../web3');

exports.getPlayerInfo = async function(req, res, next) { 
    let player = [];

    await PlayerService.getPlayerInfo(ABI.player_abi, req.params.address)
    .then(response => {
        player.push(response)
    }, error => {
        console.log(error)
    });

    console.log(player)

    return res.render('index', { title: 'Etherfoot', players: player});
}

exports.renderHome = async function(req, res, next) {
    let accounts = []

    await web3.eth.getAccounts()
    .then(response => {
        accounts = response
    }, error => {
        console.log(error.response)
    })

    web3.eth.defaultAccount = accounts[0]

    return res.render('index')
}

exports.getPlayers = async function(req, res, next) {
    console.log(ABI.player_abi)
    let players = []

    await PlayerService.getPlayers(ABI.registry_abi, req.params.address)
    .then(async response => {
        for(var i = 0; i < response.length; i++) {
            await PlayerService.getPlayerInfo(ABI.player_abi, response[i])
            .then(response => {
                players.push(response)
            }, error => {
                console.log(error)
            });
        }
    }, error => {
        console.log(error)
    })

    return res.render('players', { players })
}

exports.createPlayer = async function(req, res) {
    const player = req.body

    await PlayerService.createPlayer(ABI.player_abi, player)
    .then(response => {
    })
}