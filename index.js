// https://github.com/ethereum/solc-js
// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcompilesolidity
const fs = require("fs");
const solc = require('solc')

let Web3 = require('web3');
let web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}


console.log("currentProvider: ",web3.currentProvider);
console.log("Web3 version: ",web3.version.api); // 0.20.4
console.log("The ethereum protocol version: ",web3.version.ethereum);
console.log("isConnected : ", web3.isConnected());
web3.version.getNetwork( function (error,version) {
	if (error) {
		console.log("Network error: ",error);
	}else{
		console.log("Network version: ",version);
	}
});
console.log("This property is read only and returns the number of connected peers: ",web3.net.getPeerCount);
console.log("number of hashes per second that the node is mining with: ",web3.eth.hashrate);
console.log("A BigNumber instance of the current gas price in wei",web3.eth.gasPrice.toString(10));
// set the default account
let from = web3.eth.accounts[0];
web3.eth.defaultAccount = from;
var defaultAccount = web3.eth.defaultAccount;
console.log("defaultAccount: ",defaultAccount);
console.log("getBalance: ",web3.eth.getBalance(defaultAccount));
console.log("getCode: ",web3.eth.getCode(defaultAccount));
console.log("getTransactionCount: ",web3.eth.getTransactionCount(defaultAccount));
console.log("getStorageAt: ",web3.eth.getStorageAt(defaultAccount));


var coinbase = web3.eth.coinbase;
console.log("coinbase: ",coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log("balance",balance.toString()); //100000000000000000000

var accounts = web3.eth.accounts;
console.log("Accounts: ",accounts);
console.log("The number of the most recent block: ",web3.eth.blockNumber);
console.log("a block matching the block number or block hash.", web3.eth.getBlock(0));
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


console.log('===============================构建合约');
let source = fs.readFileSync('contract.sol', 'utf8');
// Setting 1 as second paramateractivates the optimiser
let compiledContract = solc.compile(source, 1);
let contracts = compiledContract.contracts;
var contractsNames = [];
for (var name in compiledContract.contracts) {
	contractsNames.push(name);
}
let abi = compiledContract.contracts[contractsNames].interface;
let bytecode = compiledContract.contracts[contractsNames].bytecode;
let gasEstimate = web3.eth.estimateGas({data: bytecode});
let MyContract = web3.eth.contract(JSON.parse(abi));

// initiate contract for an address
var myContractInstance = MyContract.at(defaultAccount);
var result = myContractInstance.winningProposal();
console.log(result);

// var myContractReturned = MyContract.new({}, {}, {
//    from:from,
//    data:bytecode,
//    gas:gasEstimate}, function(err, myContract){
//     if(!err) {
//        // NOTE: The callback will fire twice!
//        // Once the contract has the transactionHash property set and once its deployed on an address.

//        // e.g. check tx hash on the first call (transaction send)
//        if(!myContract.address) {
//            console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract
       
//        // check address on the second call (contract deployed)
//        } else {
//            console.log(myContract.address) // the contract address
//        }

//        // Note that the returned "myContractReturned" === "myContract",
//        // so the returned "myContractReturned" object will also get the address set.
//     }else{
//     	console.log('error :', err);
//     }
// });

// for (var contractName in compiledContract.contracts) {
// 	// code and ABI that are needed by web3
// 	console.log("contractName:",contractName + ': ')
// 	console.log("contractName:",contractName + '; ')
// }

//编译合约

//得到合约对象
var abic = [{
     name: 'myConstantMethod',
     type: 'function',
     constant: true,
     inputs: [{ name: 'a', type: 'string' }],
     outputs: [{name: 'd', type: 'string' }]
}, {
     name: 'myStateChangingMethod',
     type: 'function',
     constant: false,
     inputs: [{ name: 'a', type: 'string' }, { name: 'b', type: 'int' }],
     outputs: []
}, {
     name: 'myEvent',
     type: 'event',
     inputs: [{name: 'a', type: 'int', indexed: true},{name: 'b', type: 'bool', indexed: false}]
}];
var calcContractc = web3.eth.contract(abic).at(from);
// call constant function
var result = calcContractc.myConstantMethod('myParam');
console.log(result.toString()) // '0x25434534534'
