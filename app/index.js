var Web3 = require('web3')
var provider = new Web3.providers.HttpProvider("http://localhost:7545");
var contract = require("@truffle/contract");
let tokenAbi = require("../build/contracts/Bouhmid.json");
var web3 = new Web3(provider)
var account = "0xA7cD0939D861935a078380aAb4c45AA3E3561DdE";
// myinstance;
// web3.eth.getCoinbase(function(err, account) {
//    account = account
   
    
// })
const mycontract = contract(tokenAbi)
mycontract.setProvider(provider);
mycontract.deployed().then(instance =>{
    instance.addBalance("0xA7cD0939D861935a078380aAb4c45AA3E3561DdE",300,{from: account}).then(balance =>{
     const event = balance.logs[0].args
        console.log(event._value.toNumber());
    
       })
    instance.getBalance.call("0xA7cD0939D861935a078380aAb4c45AA3E3561DdE").then((balance) =>{
            console.log(balance.toNumber());
            
    })
 
    
})