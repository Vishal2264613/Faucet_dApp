import { useContext } from "react";
import Web3Context from "../../context/Web3Context";
import Truncate from "../../tool/Truncate";
const ConnectedAccount = () => {
  const { state } = useContext(Web3Context);
  return (
    <div class="relative inline-flex flex-wrap items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg ">
      <span class="relative px-16 max-sm:px-8 sm:px-8 lg:px-16  py-1 bg-gray-100/30 backdrop-filter backdrop-blur-lg rounded-md text-sm">
        {state.selectedAccount
          ? Truncate(state.selectedAccount, 4, 4, 11)
          : "Connect Account"}
      </span>
    </div>
  );
};
export default ConnectedAccount;
