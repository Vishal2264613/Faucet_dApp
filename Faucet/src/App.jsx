import React from "react";
import Navbar from "./components/navbar/Navbar";
import { WalletProvider } from "./components/wallet/Wallet";
import backgroundImage from "./assets/bg.jpg";
import { Hero } from "./components/hero/Hero";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="relative h-full w-full bg-slate-950">
          <img
            src={backgroundImage}
            alt="Description of image"
            className="object-cover w-full h-full absolute inset-0 brightness-90"
          />
          {/* <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}
        </div>
      </div>

      <div class="relative z-10 h-screen w-screen ">
        <WalletProvider>
          <Navbar />
          <Hero />
        </WalletProvider>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default App;
