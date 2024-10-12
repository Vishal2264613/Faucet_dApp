import React from "react";
import TokenDisplay from "../tokenDisplay/TokenDisplay";
import FaucetDisplay from "../displaypanel/FaucetDisplay";

export const Hero = () => {
  return (
    <div className="absolute  m-auto left-0 right-0 flex-wrap mt-20 items-center justify-center ">
      {/* <div className="flex-wrap h-auto w-auto px-10 py-12 rounded-2xl max-w-screen-md mx-auto mb-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"> */}
      <div className="flex-wrap h-auto w-auto px-10 py-12 rounded-2xl bg-gray-200/10 backdrop-filter backdrop-blur-md border border-gray-100/10  max-w-screen-md mx-auto mb-8 ">
        <FaucetDisplay />
        <TokenDisplay />
      </div>
    </div>
  );
};
