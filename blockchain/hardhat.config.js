
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/m76AXazA_t-RDb6KU6YnPmCQ5vFvepY5',
      accounts: ['31895609cea4785cbccdaea7440e55feb699e9e70cafbd6f676db27821a00a09']
    }
  }
};