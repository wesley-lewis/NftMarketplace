require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const REPORT_GAS = process.env.REPORT_GAS
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL, 
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
  },
  contractSizer: {
    runOnCompile: false,
    only: ["NftMarketplace"],
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0
    },
    player: {
      default: 1,
    },
  },
  solidity: "0.8.18",
  mocha: {
    timeout: 200000,
  }
};