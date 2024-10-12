import ConnectedAccount from "./ConnectedAccount";
import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

import ConnectedNetwork from "./ConnectedNetwork";

import Button from "../button/Button";

const Navbar = () => {
  const { state } = useContext(Web3Context);
  return (
    <nav className="relative mb-6 flex items-center justify-between py-2">
      <p className="font-sans font-extrabold text-3xl mx-10">GenesisToken</p>
      <div className="mt-5 mr-10 flex items-center justify-center">
        {state.selectedAccount ? (
          <div>
            <ConnectedNetwork />
            <ConnectedAccount />
          </div>
        ) : (
          <Button value="Connect To Wallet" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
