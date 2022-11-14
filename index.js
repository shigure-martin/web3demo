const http = require("http");
const fs = require("fs");

const port = 8090;
const ip = "127.0.0.1";

var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getMem",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "_n",
				"type": "uint8"
			}
		],
		"name": "setMem",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// var data = fs.readFileSync("whiteList_abi.json", "utf-8");

var Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/fc272ba6c95d408badd25ab0579d163e"));
//const web3 = new Web3("ws://localhost:8545");

var whiteListAddr = "0xd63b6E4ECcD4bd83d5B391DE9621FedD2be385ec";

var contract = new web3.eth.Contract(abi, whiteListAddr);

//contract.methods.getList().call({from:"0xA738f13354ADaf4969aE7e8C8E5a975eee20a4A9"}).then(console.log);

const server = http.createServer((request, response) => {
    console.log(request.url, response.method);
    response.end("hello world");
});

server.listen(port, ip, ()=>{
    console.log(contract.methods.getList().call());
});

web3.eth.getAccounts().then(console.log);
