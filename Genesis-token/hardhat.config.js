require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    mainnet: {
      url: process.env.INFURA_SEPOLIA_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
