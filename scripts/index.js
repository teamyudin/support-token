const BigNumber = require('bignumber.js');

module.exports = async function main(callback) {
    try {
        const Box = artifacts.require("Box");
        const box = await Box.deployed();

        let value = await box.retrieve();

        await box.store(BigNumber(value).toNumber()+1);

        value = await box.retrieve();

        console.log("Box value is", value.toString());
  
      callback(0);
    } catch (error) {
      console.error(error);
      callback(1);
    }
  }