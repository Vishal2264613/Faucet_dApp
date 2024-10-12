import { useState, useEffect } from "react";
import { connectWallet } from "../../utils/connectWallet";
import Web3Context from "../../context/Web3Context";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";

export const WalletProvider = ({ children }) => {
  const [state, setState] = useState({
    signer: null,
    provider: null,
    account: null,
    genesisTokenContract: null,
    chianId: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("account")) {
      handleWallet();
    }

    window.ethereum.on("accountsChanged", () => handleAccountChange(setState));
    window.ethereum.on("chainChanged", () => handleChainChange(setState));

    return () => {
      window.ethereum.removeListener("accountsChanged", () =>
        handleAccountChange(setState)
      );
      window.ethereum.removeListener("chainChanged", () =>
        handleChainChange(setState)
      );
    };
  }, []);
  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        signer,
        provider,
        selectedAccount,
        genesisTokenContract,
        chainId,
      } = await connectWallet();
      setState({
        signer,
        provider,
        selectedAccount,
        genesisTokenContract,
        chainId,
      });
    } catch (error) {
      console.error(error.message);
    } finally {
      window.sessionStorage.setItem("account", state.selectedAccount);

      setIsLoading(false);
    }
  };
  return (
    <div>
      <Web3Context.Provider value={{ state, handleWallet }}>
        {children}
      </Web3Context.Provider>
      {isLoading}
    </div>
  );
};
