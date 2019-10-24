module.exports = {
    player_abi: [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_position",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_overall",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "buyPlayer",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "listPlayer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "player",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "position",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "overall",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "listed",
                    "type": "bool"
                },
                {
                    "internalType": "address payable",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "contract_value",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "contract_address",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unlistPlayer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    registry_abi: [{"constant":false,"inputs":[{"internalType":"address","name":"owner_address","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"setOwnedByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getListedPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"player_address","type":"address"}],"name":"removeListed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner_address","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"removeListedByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner_address","type":"address"}],"name":"getPlayersForAddress","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"all_registry","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner_address","type":"address"}],"name":"getListedPlayersForAddress","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"player_address","type":"address"}],"name":"setListed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"listed_registry","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner_address","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"removeOwnedByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner_address","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"setListedByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"prev_owner","type":"address"},{"internalType":"address","name":"new_owner","type":"address"},{"internalType":"address","name":"player_address","type":"address"}],"name":"changeOwners","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
}