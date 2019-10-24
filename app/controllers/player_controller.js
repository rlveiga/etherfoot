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

exports.renderPlayerPage = async function(req, res, next) {
    let players = []
    let squad_value = 0

    await PlayerService.getPlayers()
    .then(async response => {
        for(var i = 0; i < response.length; i++) {
            await PlayerService.getPlayerInfo(response[i])
            .then(response => {
                squad_value = squad_value + parseFloat(web3.utils.fromWei(response.contract_value))

                players.push(response)
            }, error => {
                console.log('erro1')
            });
        }
    }, error => {
        console.log('erro 2')
    })
    
    return res.render('players', { players,  squad_value })
}

exports.createPlayer = async function(req, res) {
    const player = req.body
    const player_price = player.overall * 10000000000000000

    await PlayerService.createPlayer(player, player_price)
    .then(response => {
        console.log(response)
    }, error => {
        console.log(error)
    })

    res.redirect('back')
}