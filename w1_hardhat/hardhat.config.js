require("@nomicfoundation/hardhat-toolbox");
require("hardhat-abi-exporter"); // 报错 task('clear-abi', async function (args, hre) 导入 hardhat-abi-exporter
require("@nomiclabs/hardhat-etherscan");

let dotenv = require('dotenv');
dotenv.config({ path: "./.env" });

const mnemonic = process.env.MNEMONIC;
const apiKey = process.env.ETHERSCAN_API_KEY;

// const scankey = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 31337,
      gas: 12000000,
      accounts: {
        mnemonic: mnemonic,
      }
    },

    // mumbai: {
    //   url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
    //   accounts: {
    //     mnemonic: mnemonic,
    //   },
    //   chainId: 80001,
    // },
  },
  
  etherscan: {
    apiKey: apiKey,
  },
};
