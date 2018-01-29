// https://github.com/ethereum/solc-js
// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcompilesolidity
const fs = require("fs");
const solc = require('solc')
const net = require('net')


/// 引入web3 ，版本 0.20.4

let Web3 = require('web3');
let web3;

let from = '0xf68AaA3E3603Fb85C1A3Ca14e35776D97C53CA50';
let spwd = '6e1d6928bf7a19a94d258424bbe91a595d0f016d2eee5bb5de79da911e46775a';

// let from = '0x6ee8ad47cbb044f680e9f3c032553007445e566d';
// let spwd = 'b630ac4f2ee3abb8c41fa5dd4677db2fb5c332d14b40944472cc2e7b7a8223f6';

/// set the provider
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    // https://rinkeby.infura.io/
    // http://localhost:8545
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/",10,from,spwd));
}


// Available Accounts
// ==================
// (0) 0x6ee8ad47cbb044f680e9f3c032553007445e566d
// (1) 0x5b5645960722a745bb9743cf2ca2c3fd64f78f12
// (2) 0xd7d9f5a62d9f906819d65ed8ccc5f1ec6ff47fe7
// (3) 0xc5cbaa0cf1cc676c643baa8f894032ed6c9e7be9
// (4) 0x5a119a71adc63dc6ce75de07b8d97ca40e77d2c2
// (5) 0xc3994c928fe2f3de03856b85f2a49f97e7749b25
// (6) 0x0fabce6673d1cc1fb215b3d87f246d7c68b63a5f
// (7) 0x16c3b2b086649cc1da96e791368451c023016e4b
// (8) 0x424e1b560761afc6cd1c8f9dd2b7237fb71aa451
// (9) 0xe66c6d6941ef38c4a39bf177611f736a60bb9327

// Private Keys
// ==================
// (0) b630ac4f2ee3abb8c41fa5dd4677db2fb5c332d14b40944472cc2e7b7a8223f6
// (1) 75cf46736fe98574cd60e6ee97b1f767a85d999d01d3c0cc7f14be5002c16b43
// (2) 6a84841d92e5fefc0f983280515bc2604e4f99ae30bbf02fe4255cbfb5e76096
// (3) ae1fbec89ea43579c9d20be3c6353ba0029a65dada4ba2766fc4408e065a3f53
// (4) b4ec6a200c0ea1e551d146876710d49e47f20ce1fe4ca93bf260790b8cd28494
// (5) 67535b871af76283608e1be510522fa9220b43aea51241b7b323774bc9c42e6b
// (6) 199d7e07d845b6fec4aacb8041bfe32af185b019197301f718a4926e2d6f8e77
// (7) c9bc775a031a034456a18a981a81e900ea12a76b84c1065dca0003084cbf6122
// (8) 33d445b339c82bd4e99f567927936f23b45dcd9925b56235eab529e5a84caa8b
// (9) 98f49114b205499a55cd40dca0e99ca4a580d6008f0825b6633a8cd158b0ad05
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
web3.eth.isSyncing(function(error, sync){
    if(!error) {
        // stop all app activity
        if(sync === true) {
           // we use `true`, so it stops all filters, but not the web3.eth.syncing polling
           web3.reset(true);

           console.log('--------------syncing');
        // show sync info
        } else if(sync) {
           console.log(sync.currentBlock);
            console.log('--------------currentBlock');
        // re-gain app operation
        } else {
            // run your app init function...
            console.log('start app ------');
        }
    }else{
        console.log('Sync error -------: ',error);
    }
});
var sync = web3.eth.syncing;
console.log(sync);
// console.log("a block matching the block number or block hash.", web3.eth.getBlock(0));
// var receipt = web3.eth.getTransactionReceipt('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b');
// console.log("the receipt of a transaction by transaction hash: ",receipt);
// var code = "60606040526040805190810160405280600681526020017f76302e302e31000000000000000000000000000000000000000000000000000081525060069080519060200190620000519291906200016d565b5034156200005e57600080fd5b62989680600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550629896806000819055506040805190810160405280600481526020017f616263640000000000000000000000000000000000000000000000000000000081525060049080519060200190620000fc9291906200016d565b506040805190810160405280600181526020017f4700000000000000000000000000000000000000000000000000000000000000815250600590805190602001906200014a9291906200016d565b506012600360006101000a81548160ff021916908360ff1602179055506200021c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b057805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e0578251825591602001919060010190620001c3565b5b509050620001f09190620001f4565b5090565b6200021991905b8082111562000215576000816000905550600101620001fb565b5090565b90565b610fa0806200022c6000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b4578063095ea7b31461014257806318160ddd1461019c57806323b872dd146101c5578063313ce5671461023e57806354fd4d501461026d57806370a08231146102fb57806395d89b4114610348578063a9059cbb146103d6578063cae9ca5114610430578063dd62ed3e146104cd575b600080fd5b34156100bf57600080fd5b6100c7610539565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101075780820151818401526020810190506100ec565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014d57600080fd5b610182600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506105d7565b604051808215151515815260200191505060405180910390f35b34156101a757600080fd5b6101af6106c9565b6040518082815260200191505060405180910390f35b34156101d057600080fd5b610224600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106cf565b604051808215151515815260200191505060405180910390f35b341561024957600080fd5b61025161094b565b604051808260ff1660ff16815260200191505060405180910390f35b341561027857600080fd5b61028061095e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102c05780820151818401526020810190506102a5565b50505050905090810190601f1680156102ed5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561030657600080fd5b610332600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109fc565b6040518082815260200191505060405180910390f35b341561035357600080fd5b61035b610a45565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039b578082015181840152602081019050610380565b50505050905090810190601f1680156103c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103e157600080fd5b610416600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae3565b604051808215151515815260200191505060405180910390f35b341561043b57600080fd5b6104b3600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610c4c565b604051808215151515815260200191505060405180910390f35b34156104d857600080fd5b610523600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610eed565b6040518082815260200191505060405180910390f35b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105cf5780601f106105a4576101008083540402835291602001916105cf565b820191906000526020600020905b8154815290600101906020018083116105b257829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b600081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015801561079c575081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156107a85750600082115b1561093f5781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610944565b600090505b9392505050565b600360009054906101000a900460ff1681565b60068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109f45780601f106109c9576101008083540402835291602001916109f4565b820191906000526020600020905b8154815290600101906020018083116109d757829003601f168201915b505050505081565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610adb5780601f10610ab057610100808354040283529160200191610adb565b820191906000526020600020905b815481529060010190602001808311610abe57829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610b345750600082115b15610c415781600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610c46565b600090505b92915050565b600082600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff1660405180807f72656365697665417070726f76616c28616464726573732c75696e743235362c81526020017f616464726573732c627974657329000000000000000000000000000000000000815250602e01905060405180910390207c01000000000000000000000000000000000000000000000000000000009004338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828051906020019080838360005b83811015610e8d578082015181840152602081019050610e72565b50505050905090810190601f168015610eba5780820380516001836020036101000a031916815260200191505b5094505050505060006040518083038160008761646e5a03f1925050501515610ee257600080fd5b600190509392505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050929150505600a165627a7a723058204773e280281a6e448675b3f38fa3817ae5b9862fd4c716ada50e114e6a75e8c50029";
// web3.eth.sendTransaction({data: code}, function(err, transactionHash) {
//   if (err){
//   	console.log("sendTransaction error",err);
//   }else{
// 	console.log("sendTransaction: ",transactionHash);
//   }
// });

console.log("estimateGas: ",web3.eth.estimateGas({
    to: "0xc4abd0339eb8d57087278718986382264244252f", 
    data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
}));

//得到合约对象
let toAddressQP = '0xa659250745AB74C11b9407B3DF563D7FB10B56e8';
// var contractAddress = '0xB477686CA8Fd5E1DAc2700fCbC2f880Ae28DB851';
var contractAddress = '0xA58F2606f3Ef7D2137b1Bb05949961eeB16a2A80';
// var contractABI = [ { "constant": false, "inputs": [ { "name": "newSellPrice", "type": "uint256" }, { "name": "newBuyPrice", "type": "uint256" } ], "name": "setPrices", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "HC" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "1000000000" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_value", "type": "uint256" } ], "name": "burn", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "sellPrice", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "target", "type": "address" }, { "name": "mintedAmount", "type": "uint256" } ], "name": "mintToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "burnFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "buyPrice", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xb91964ef38cdef239d38e6e2b4d66f48766ae3c6" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "¥¥" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buy", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "frozenAccount", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256" } ], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "target", "type": "address" }, { "name": "freeze", "type": "bool" } ], "name": "freezeAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "initialSupply", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "initial Supply", "template": "elements_input_uint", "value": "10" }, { "name": "tokenName", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "HC" }, { "name": "tokenSymbol", "type": "string", "index": 2, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "¥¥" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "target", "type": "address" }, { "indexed": false, "name": "frozen", "type": "bool" } ], "name": "FrozenFunds", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Burn", "type": "event" } ];
var contractABI = [ { "constant": false, "inputs": [ { "name": "a", "type": "uint256" }, { "name": "b", "type": "uint256" } ], "name": "add", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getCount", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
var contractRenhui = web3.eth.contract(contractABI);
// instantiate by address
var contractInstance = contractRenhui.at(contractAddress);


//使用transaction方式调用，写入到区块链上
contractInstance.add.sendTransaction(2, 1,{
    from: defaultAccount
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

// // Explicitly calling this method
// contractInstance.Transfer.call(from ,account_two, [, transactionObject] [, defaultBlock] [, callback]);

// // Explicitly sending a transaction to this method
// contractInstance.Transfer.sendTransaction(param1 [, param2, ...] [, transactionObject] [, callback]);

// function signMessage(message){
    
//     var state=web3.personal.unlockAccount(from,spwd,100);
//     const msg = new Buffer(message);
//     const sig = web3.eth.sign(defaultAccount, '0x' + msg.toString('hex'));
//     return sig;
// }
// console.log(signMessage('abc'));
 // var msg = web3.sha3('abc') ;
 //    console.log('SHA3 - '+msg);
 //     var sig = web3.eth.sign(defaultAccount,msg); 
 //     console.log('SHA3 signed msg op - '+sig);

// var txhash = contractInstance.Transfer.sendTransaction(account_two, 100);
// console.log('txhash',txhash);
// var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";

// web3.eth.sendTransaction({data: code}, function(err, address) {
//   if (!err)
//     console.log(address); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
// });

// var result = web3.eth.sign(defaultAccount,web3.sha3("xyz")); // second argument is web3.sha3("xyz")
// console.log(result);

// console.log(res_json);

// can be 'latest' or 'pending'
// var filter = web3.eth.filter({fromBlock: '0x0', toBlock: 'latest'});

// // watch for changes
// filter.watch(function(error, result){
//   if (!error)
//     console.log(result);
// });

// get all past logs again.
// var myResults = filter.get(function(error, logs){ 
//     if (!error){
//         console.log('Results of all past logs : ',logs);
//         console.log(logs);
//     }
// });


// watch for an event with {some: 'args'}
// var events = contractInstance.allEvents();

// watch for changes
// events.watch(function(error, event){
//   if (!error)
//     console.log(event);
// });

// would get all past logs again.
// events.get(function(error, logs){
//     if (!error) {
//         console.log('logs-----------');
//         console.log(logs);
//     }
// });

// would stop and uninstall the filter
// events.stopWatching();

