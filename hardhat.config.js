require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv");
dotenv.config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      from: `${process.env.FROM_ADDRESS_LOCAL}`,
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: [`${process.env.PRIVATE_KEY_LOCAL}`]
    },

    ropsten: {
      url: `${process.env.INFURA_ROPSTEN_BASE_URL}${process.env.INFURA_API_KEY}`,
      chainId: 3,
      from: `${process.env.FROM_ADDRESS_LOCAL}`,
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: [`${process.env.PRIVATE_KEY_LOCAL}`]
    },

    kovan: {
      url: `${process.env.INFURA_KOVAN_BASE_URL}${process.env.INFURA_API_KEY}`,
      chainId: 42,
      from: `${process.env.FROM_ADDRESS_LOCAL}`,
      gas: "auto",
      gasPrice: "auto",
      loggingEnabled: "false",
      accounts: [`${process.env.PRIVATE_KEY_LOCAL}`]
    },

  }
};
