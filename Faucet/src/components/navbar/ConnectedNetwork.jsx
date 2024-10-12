import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const network = (networkName) => {
  return (
    <div class="relative mr-2 inline-flex flex-wrap items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg ">
      <span class="relative px-16 max-sm:px-8 sm:px-8 lg:px-16   py-1 bg-gray-100/30 backdrop-filter backdrop-blur-lg rounded-md text-sm ">
        {networkName}
      </span>
    </div>
  );
};

const ConnectedNetwork = () => {
  const { state } = useContext(Web3Context);
  if (state.chainId === null) {
    return network("not Connected");
  } else if (state.chainId === 11155111) {
    return network("Sepolia");
  } else {
    return network("Network not Detected");
  }
};
export default ConnectedNetwork;
