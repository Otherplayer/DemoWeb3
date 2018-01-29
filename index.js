// https://github.com/ethereum/solc-js
// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcompilesolidity
// https://github.com/SilentCicero/ethereumjs-accounts
const fs = require("fs");
const solc = require('solc')
const net = require('net')


/// 引入web3 ，版本 0.20.4

let Web3 = require('web3');
let web3;

let from = '0xf68AaA3E3603Fb85C1A3Ca14e35776D97C53CA50';
let spwd = '6e1d6928bf7a19a94d258424bbe91a595d0f016d2eee5bb5de79da911e46775a';

/// set the provider
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    // https://rinkeby.infura.io/
    // http://localhost:8545
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545",10,from,spwd));
}

var account_one = '0xf68AaA3E3603Fb85C1A3Ca14e35776D97C53CA50';
var account_two = '0x5b5645960722a745bb9743cf2ca2c3fd64f78f12';

// set the default account
web3.eth.defaultAccount = from;
var defaultAccount = web3.eth.defaultAccount;
console.log("defaultAccount: ",defaultAccount);


//基本信息
// console.log("Current provider: ",web3.currentProvider);
// console.log("Node",web3.version.node);
// console.log("Network",web3.version.network);
// console.log("Ethereum",web3.version.ethereum);
// console.log("PeerCount",web3.net.peerCount);
console.log("Check if a connection to a node exists: ", web3.isConnected());
console.log("Number of connected peers: ",web3.net.peerCount);
// console.log("Number of hashes per second that the node is mining with: ",web3.eth.hashrate);
console.log("Gas price in wei",web3.eth.gasPrice.toString(10));

console.log("getBalance: ",web3.eth.getBalance(defaultAccount).toString());
console.log("getCode: ",web3.eth.getCode(defaultAccount));
console.log("getTransactionCount: ",web3.eth.getTransactionCount(defaultAccount));
console.log("getStorageAt: ",web3.eth.getStorageAt(defaultAccount));
// console.log("coinbase: ",web3.eth.coinbase);
// var accounts = web3.eth.accounts;
// console.log("Accounts: ",accounts);
console.log("The number of the most recent block: ",web3.eth.blockNumber);
// console.log("a block matching the block number or block hash.", web3.eth.getBlock(0));

console.log("estimateGas: ",web3.eth.estimateGas({
    to: "0xc4abd0339eb8d57087278718986382264244252f", 
    data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
}));

// 得到合约对象
let toAddressQP = '0xa659250745AB74C11b9407B3DF563D7FB10B56e8';
// var contractAddress = '0xB477686CA8Fd5E1DAc2700fCbC2f880Ae28DB851';
var contractAddress = '0xA58F2606f3Ef7D2137b1Bb05949961eeB16a2A80';
// var contractABI = [ { "constant": false, "inputs": [ { "name": "newSellPrice", "type": "uint256" }, { "name": "newBuyPrice", "type": "uint256" } ], "name": "setPrices", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "HC" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "1000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_value", "type": "uint256" } ], "name": "burn", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "sellPrice", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "target", "type": "address" }, { "name": "mintedAmount", "type": "uint256" } ], "name": "mintToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "burnFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "buyPrice", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xb91964ef38cdef239d38e6e2b4d66f48766ae3c6" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "¥¥" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buy", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "frozenAccount", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256" } ], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "target", "type": "address" }, { "name": "freeze", "type": "bool" } ], "name": "freezeAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "10" }, { "name": "tokenName", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "HC" }, { "name": "tokenSymbol", "type": "string", "index": 2, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "¥¥" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "target", "type": "address" }, { "indexed": false, "name": "frozen", "type": "bool" } ], "name": "FrozenFunds", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Burn", "type": "event" } ];
var contractABI = [ { "constant": false, "inputs": [ { "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" } ], "name": "add", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getCount", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
var contractRenhui = web3.eth.contract(contractABI);
// instantiate by address
var contractInstance = contractRenhui.at(contractAddress);

/// 合约操作
function funcControlContract () {
    //使用transaction方式调用，写入到区块链上
contractInstance.add.sendTransaction(2, 1,{
    from: defaultAccount
},function (err,transactionHash) {
      console.log('----------------Send Transaction');
  if (!err){
    console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
  }else{
    console.log(err);
  }
});

console.log("after contract deploy, call:" + contractInstance.getCount.call());


// //从交易地址获取数据
var transaction_address = '0x140be558a5eb4f1db20ddc00a13681748d98837638e6d9107697324b431a8678';
var translation = web3.eth.getTransaction(transaction_address);
console.log("Translation: ------------\n",translation);
var receipt = web3.eth.getTransactionReceipt(transaction_address);
console.log("Receipt: --------------\n",receipt);

// 将数据写入到交易中
// 提交交易到区块链，会立即返回交易hash，但是交易要等到被矿工收录到区块中后才生效

// var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";
let log = {
    time:(new Date).getTime(),
    msg:"abc"
};
let str = JSON.stringify(log);
let code = Buffer.from(str).toString('hex');
code = '0x'+code;
console.log(code);
web3.personal.unlockAccount(defaultAccount);
// web3.personal.unlockAccount(defaultAc, defaultAcPWD, 100);
web3.eth.sendTransaction({data: code}, function(err, transactionHash) {
    console.log('----------------Send Transaction');
  if (!err){
    console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
  }else{
    console.log(err);
  }
});


// console.log(signMessage('abc'));
// var msg = web3.sha3('abc') ;
//    console.log('SHA3 - '+msg);
//     var sig = web3.eth.sign(defaultAccount,msg); 
//     console.log('SHA3 signed msg op - '+sig);
}

// ----------------------------------------------------

// // 日志
// // can be 'latest' or 'pending'
// var filter = web3.eth.filter('latest');
// // watch for changes
// filter.watch(function(error, result){
//   if (!error){
//       console.log(result);
//   }else{
//       console.log("-----0",error);
//   }
// });
// // get all past logs again.
// var myResults = filter.get(function(error, logs){ 
//     if (!error){
//         console.log('Results of all past logs : ',logs);
//         console.log(logs);
//     }else{
//       console.log("-----",error);
//     }
// });

// filter.stopWatching();

// ----------------------------------------------------


// watch for an event with {some: 'args'}
var events = contractInstance.allEvents({'address':from});

// watch for changes
events.watch(function(error, event){
  if (!error){
    console.log(event);
  }else{
    console.log("Error events",error);
  }
});

// would get all past logs again.
events.get(function(error, logs){
    if (!error) {
        console.log('logs-----------');
        console.log(logs);
    }else{
      console.log("Error events all",error);
    }
});
// would stop and uninstall the filter
events.stopWatching();

