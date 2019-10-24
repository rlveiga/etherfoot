const PlayerService = require('../services/player_service')
const ABI = require('../constants/abis');
const web3 = require('../../web3');

const position_map = {
    "1": "GOL",
    "2": "DEF",
    "3": "MEI",
    "4": "ATA"
}

let players = []
let market_players = []

exports.renderHome = async function(req, res, next) {
    return res.render('index')
}

exports.renderMarketPage = async function(req, res) {
    market_players = []

    await PlayerService.getListedPlayers()
    .then(async response => {
        for(var i = 0; i < response.length; i++) {
            if(response[i] != '0x0000000000000000000000000000000000000000') {
                await PlayerService.getPlayerInfo(response[i])
                .then(response => {
                    market_players.push(response)
                }, error => {
                    console.log(error)
                })
            }
        }

        console.log(market_players)
    }, error => {
        console.log(error)
    })

    return res.render('market', { market_players, address: web3.eth.defaultAccount })
}

exports.renderPlayerPage = async function(req, res, next) {
    players = []
    let squad_value = 0

    await PlayerService.getPlayers()
    .then(async response => {
        for(var i = 0; i < response.length; i++) {
            await PlayerService.getPlayerInfo(response[i])
            .then(response => {
                squad_value = squad_value + parseFloat(web3.utils.fromWei(response.contract_value))
                    
                players.push(response)
                players[i].position = position_map[players[i].position]
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
    if(req.body.name == "" || req.body.pos == "" || req.body.overall == "") {
        console.log('Please fill out all fields')

        res.redirect('back')
    }

    else {
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
}

exports.listPlayer = async function(req, res) {
    await PlayerService.listPlayer(players[req.params.index].contract_address)
    .then(response => {
        console.log(response)
    }, error => {   
        console.log(error)
    })
    
}

exports.unlistPlayer = async function(req, res) {
    await PlayerService.unlistPlayer(players[req.params.index].contract_address)
    .then(response => {
        console.log(response)
    }, error => {   
        console.log(error)
    })
    
}