const Bouhmid = artifacts.require("Bouhmid");
const truffleAssert = require('truffle-assertions');
var myinstance;
console.log('hey');
contract("Bouhmid", accounts => {
  it("should put 10000 MetaCoin in the first account", () =>
  
    Bouhmid.deployed()
      .then(instance => {
        //   console.log(instance);
          myinstance = instance
          return instance.addBalance.call("0xbbae4f7059444c892af26d6dcb92ea20914f5c8e",100)})
      .then(balance => {
        //   myinstance.Balance().watch((err, res) => {
        //         if (err) console.log(err);
        //         console.log('contract address', res)
        //     });
        // const event = balance.logs[0].args
        // console.log(event._value.toNumber());
        console.log(balance.toNumber());
        
        
        //    instance.Balance().get((result)=>{
        //        console.log(result);
               
        //    })
        // Bouhmid.events.Balance().watch((error, result) => {
        //     console.log(result);
            
        // });
        // console.log(myinstance);
        
    //    balance.on('Balance',{
    //        data => console.log(data)
    //        })
//  truffleAssert.eventEmitted(balance,'Balance', (ev) => {
//  return ev._value
 
//       }, 'TestEvent should be emitted with correct parameters')
    // console.log(balance);
    // balance.logs[0].event.on('Balance',(data) => console.log(data))
    // console.log(balance);
    
    
       
      }));
     
      it("gives ", () =>
    Bouhmid.deployed()
      .then(instance => {
          return instance.getBalance.call("0xbbae4f7059444c892af26d6dcb92ea20914f5c8e")
          })
      .then(balance => {
       console.log(balance.toNumber());
       
      }));
})
