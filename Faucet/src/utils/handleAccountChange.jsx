import { ethers } from "ethers";
export const handleAccountChange = async (setState) => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const selectedAccount = accounts[0];
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  console.log(selectedAccount);
  setState((prevState) => ({ ...prevState, signer, selectedAccount }));
};
