// https://eth-ropsten.alchemyapi.io/v2/Bot62YUpzqKLUV4Xqf5n901Nm7MCZHes

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Bot62YUpzqKLUV4Xqf5n901Nm7MCZHes",
      accounts: [
        "b582654f94f13e9c9907545bd34b659379bdb7aa440808b1fab6bcd89b9a4d7f"
      ],
    },
  },
};