import { Button } from "../ui/button";
import Moon from "../self/Moon";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen gap max-container"
    >
      <div className="relative flex flex-col justify-center items-start w-full max-xl:padding-x ">
      <Sparkles className="ml-[10%] mb-[2%] text-white"/>
        <h1 className="text-white font-fira text-8xl max-sm:text-[60px] max-sm:leading-[82px] font-bold">
          <span className= "xl:whitespace-nowrap relative z-10 pr-10">
            Trusted Multi-Chain
          </span>
          <br />
          <span className="text-yellow-300 inline-block mt-3 mr-5"> DEX </span>
          Platform
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>

        <div className="flex flex-row justify-start items-start gap-5">
          <Button className="rounded-full p-6 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-bold">Connect Wallet</Button>
          <Button className="rounded-full p-6 bg-transparent border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black" variant="outline">
            Trade Crypto
          </Button>
        </div>
      </div>

      <div className="relative flex-1 flex-col justify-center py-10 items-center xl:min-h-screen max-xl:py-40 hidden xl:block">
       <Sparkles className="ml-[20%] text-white"/>
        <Moon className="size-96" />
       <Sparkles className="ml-[80%] text-white"/>
      </div>
    </section>
  );
};

export default Hero;
