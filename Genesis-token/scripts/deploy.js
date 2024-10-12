const hre = require("hardhat");

async function main() {
  const GenesisToken = await hre.ethers.getContractFactory("GenesisToken");
  const genesisToken = await GenesisToken.deploy(100000000, 25);

  await genesisToken.waitForDeployment();

  console.log("Genesis Token deployed: ", genesisToken.target);
}
//0x3d7873D8297b3ddf258dAd567E50217eDA0B3577

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
