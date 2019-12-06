pragma solidity >=0.5.8 <0.6.0;
// pragma experimental ABIEncoderV2;
contract Bouhmid {
    address owner;
   constructor() public{
       owner = msg.sender;
   }
    struct Users {
        uint Availaiblebalance ;
        uint totalWithdraw;
    }
    event Balance(
         uint _value
        );

    // modifier onlyOwner(){
    //     require(owner == msg.sender,"you are not the owner");
    //     _;
    // }
    
    mapping ( address=>Users) user;
    function addBalance(address _address,uint amount) public {
        user[_address].Availaiblebalance += amount;
        emit Balance(user[_address].Availaiblebalance);
    }
    function getBalance(address _address) public view returns(uint){
       return user[_address].Availaiblebalance ;
    }
    function withdraw(address _address,uint amount) public  returns(uint){
        Users storage  p = user[_address];
        if(p.Availaiblebalance >= amount) p.Availaiblebalance -= amount;
        else return 0;
        
    }
}