import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { MyContract } from "../../src/types/MyContract";
import { MyContract__factory } from "../../src/types/factories/MyContract__factory";

task("deploy:MyContract").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const myContractFactory: MyContract__factory = <MyContract__factory>await ethers.getContractFactory("MyContract");
  const myContract: MyContract = <MyContract>await myContractFactory.deploy();
  await myContract.deployed();

  console.log("MyContract deployed to: ", myContract.address);
  console.log("Deploy TX ", myContract.deployTransaction);
});
