import { ethers, upgrades } from "hardhat";
import { expect } from "chai";
import { BigNumber, Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";


describe("Contract 'SimpleTokenUpgradeable'", async () => {
  const TOKEN_NAME = "TMS Coin";
  const TOKEN_SYMBOL = "TMSC";
  const REVERT_MESSAGE_IF_CONTRACT_IS_ALREADY_INITIALIZED = 'Initializable: contract is already initialized';

  let tmsToken: Contract;
  let deployer: SignerWithAddress;
  let user1: SignerWithAddress;

  beforeEach(async () => {
    // Deploy the contract under test
    const token: ContractFactory = await ethers.getContractFactory("SimpleTokenUpgradeable");
    tmsToken = await upgrades.deployProxy(token, [TOKEN_NAME, TOKEN_SYMBOL]);
    await tmsToken.deployed();

    // Get user accounts
    [deployer, user1] = await ethers.getSigners();
    });

    describe("Deployment", async () => {
    
    it("The initialize function can't be called more than once", async () => {
      await expect(tmsToken.initialize(TOKEN_NAME, TOKEN_SYMBOL)).to.be.revertedWith(REVERT_MESSAGE_IF_CONTRACT_IS_ALREADY_INITIALIZED);
    })
  }); 
}); 
