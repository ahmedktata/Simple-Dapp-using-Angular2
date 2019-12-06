const Migrations = artifacts.require("../contacts/Bouhmid.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
