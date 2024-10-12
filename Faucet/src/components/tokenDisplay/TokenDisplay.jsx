import { useContext, useRef } from "react";
import Web3Context from "../../context/Web3Context";

const TokenDisplay = () => {
  const { state } = useContext(Web3Context);

  const getAmountRef = useRef();
  const getToken = async (e) => {
    e.preventDefault();
    const amount = getAmountRef.current.value.trim();
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid positive number.");
      return;
    }
    console.log(state.signer);
    try {
      const fcContractWithSigner = state.genesisTokenContract.connect(
        state.signer
      );
      await fcContractWithSigner.requestTokens();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div class="mb-5 border border-gray-200/50 py-6 px-2  rounded-2xl font-bold">
        <label
          for="text"
          class="block mb-2 text-base font-bold font-sans text-gray-900 dark:text-white"
        >
          Your Wallet Address
        </label>
        <input
          type="text"
          value={state.selectedAccount}
          ref={getAmountRef}
          class=" text-base rounded-lg outline-none block w-full p-2.5 dark:bg-gray-200/10 dark:text-white"
          placeholder="e.g. 0x2a07ab264fa25524f705d99ff415bef6748644b0"
          required
        />
      </div>
      <div className=" flex flex-wrap h-auto w-100  items-center justify-center">
        <button
          type="button"
          onClick={getToken}
          disabled={state.selectedAccount ? false : true}
          class="text-white h-10 w-full  bg-gray-100/30 backdrop-filter backdrop-blur-lg hover:border-black focus:ring-1 focus:outline-none focus:ring-white dark:focus:ring-white font-semibold rounded-lg text-lg text-center "
        >
          Get Token
        </button>
      </div>
    </div>
  );
};

export default TokenDisplay;
