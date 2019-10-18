const web3 = require('../../web3');

class PlayerService {
    
    async getPlayerInfo(abi, address) {
        const contract = new web3.eth.Contract(abi, address)

        return await contract.methods.players(address).call()
        .then(response => {
            return response;
        })
        .catch(error => {
            throw error;
        })
    }

    async getPlayers(abi, address) {
        const registry = new web3.eth.Contract(abi, "0xb09b45844ce3c465300c82bdd1be10e2738ea0c4")
        
        return await registry.methods.getPlayersForAddress(address).call()
        .then(response => {
            return response;
        })
        .catch(error => {
            throw error;
        })
    }

    async createPlayer(abi, player) {
        const contract = new web3.eth.Contract(abi)

        console.log(contract.contructor)

        // return await contract.deploy({
        //     data: '',
        //     arguments: [player.name, player.pos, player.att, player.pass, player.def, player.phys]
        // })
        // .send({
        //     value: web3.utils.toWei('0.015', 'ether')
        // })
    }
}

module.exports = new PlayerService()