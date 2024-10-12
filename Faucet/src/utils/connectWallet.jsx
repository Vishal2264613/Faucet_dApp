import { ethers, Contract } from "ethers";
import genesisTokenAbi from "../ABI/genesisTokenAbi.json";
import { useEffect, useState } from "react";

export const connectWallet = async () => {
  try {
    let [signer, provider, selectedAccount, genesisTokenContract, chainId] = [
      null,
      null,
      null,
      null,
      null,
    ];
    if (window.ethereum === null) {
      throw new Error("Metamsk is not installed");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    let chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    chainId = parseInt(chainIdHex, 16);

    selectedAccount = accounts[0];
    if (!selectedAccount) {
      throw new Error("No ethereum accounts available");
    }

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    const genesisTokenContractAddress =
      "0x4a242c17B9248D47B4d9aCDEF99f90ca1d75e516";

    genesisTokenContract = new Contract(
      genesisTokenContractAddress,
      genesisTokenAbi,
      signer
    );

    return {
      signer,
      provider,
      selectedAccount,
      genesisTokenContract,
      chainId,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
