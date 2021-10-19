const Tweet = artifacts.require("./contracts/Tweet.sol");
module.exports = function(deployer) {
  deployer.deploy(Tweet);
};

