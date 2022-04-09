require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
const projectId = "82bb7e8c17f74e7895bff8ff04385743"

module.exports = {
  networks:{
    hardhat : {
      chainId : 1
    },
    Rinkeby :{
      url : "https://rinkeby.infura.io/v3/${projectid}" ,
      accounts :[privateKey]
    }
  },
  solidity: "0.8.4",
};
