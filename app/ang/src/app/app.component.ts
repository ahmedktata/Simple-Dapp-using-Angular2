import { Component } from '@angular/core';
import Web3 from 'web3';
import * as Contract from 'truffle-contract';



let tokenAbi = require("../../../../build/contracts/Bouhmid.json");
var account = "0xA7cD0939D861935a078380aAb4c45AA3E3561DdE";
var provider;
declare let window: any;
var myinstance;
// var mycontract = contract(tokenAbi)
// mycontract.setProvider(provider);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  totalBalance;
  Amount;
  Address
  title = 'Simple Dapp'
  constructor(){
      this.Web3Connection()
      // const Contract = require('truffle-contract') 
      let mycontract = Contract(tokenAbi)
      mycontract.setProvider(provider);
      mycontract.deployed().then(instance =>{
        
     return myinstance = instance
 
    
})
  }
  addBalance(){
    myinstance.addBalance(this.Address,this.Amount,{from: account}).then(balance =>{
      if (balance) {
   //    get event  const event = balance.logs[0].args
     this.totalBalance = "Successfully added : "+ this.Amount
        // console.log(event._value.toNumber());
      }
     
    
       })
     
    
    
  }
  getBalance(){
myinstance.getBalance.call(this.Address).then((balance) =>{
            if (balance) {
             this.totalBalance = "Total Balance : "+balance.toNumber()              
            }
            
    })
  }
  withdrawtBalance(){
    // TODO
  }
  
//        web3.eth.getCoinbase(function(err, account) {
//    console.log(account);
   
   
    
// })
Web3Connection(){
     if (typeof window.web3 !== 'undefined') {
      // this.web3Provider = window.web3.currentProvider;
      provider = window.web3.currentProvider;
    } else {
      provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
    }

    window.web3 = new Web3(provider);
  }
  }
  
 
  
