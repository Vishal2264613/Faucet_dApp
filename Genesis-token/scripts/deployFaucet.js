const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy(
    "0x702aABb8E8D0d1e78f1614792807DC56220Cf93A"
  );

  await faucet.waitForDeployment();

  console.log("Facuet contract deployed: ", faucet.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
