import React from "react";
import ImgButton from "@/public/images/banner/button.png";
import IcSubtitle from "@/public/images/banner/subtitle.svg";
import IcGame from "@/public/images/banner/ic_game.svg";
import Image from "next/image";
import { MovingButton } from "./MovingButton";

const Banner = () => {
  return (
    <div className="px-8 py-6 lg:p-[100px] w-full lg:max-w-[1440px] mx-auto bg-banner bg-no-repeat bg-center bg-cover">
      <div className="w-full h-[414px] lg:h-[445px] flex flex-col items-center justify-center">
        <h1 className="text-white  font-koulen text-[16px] leading-[24px] lg:leading-[48px] lg:text-[48px] uppercase">
          WELCOME TO THE REALM OF
        </h1>
        <div className=" relative  ">
          <Image src={IcSubtitle} alt="img" className=" w-[356.212px] lg:w-[1239px]" />
          <span className="absolute bottom-full lg:bottom-[85%] right-[25.5px] lg:right-[7rem] transform rotate-[14deg] text-[#000] text-[6.9px] lg:text-[24px] lg:leading-[24px] font-koulen py-[1.15px] lg:py-1 px-[3.45px] lg:px-3 bg-[#FFDD63] text-center">
            NEW
          </span>
        </div>
        <p className="text-[rgba(255,255,255,0.75)] font-manrope leading-[16px] text-center lg:leading-[24px] text-[12px] lg:text-[20px] ">
          Where NFT communities gather to play, powered by the innovation of our AI-driven gaming
          engine
        </p>

        <div className="mt-4 lg:mt-[64px] flex items-center justify-center gap-2">
          <MovingButton
            duration={3000}
            direction="left"
            containerClassName="relative w-[141px] lg:w-[178.5px] h-[40px] flex items-center justify-center !"
          >
            <Image fill src={ImgButton} alt="img" className="" />
            <div className="flex items-center gap-2 lg:gap-3 relative z-[1]">
              <Image src={IcGame} alt="img" className="" />
              <div className="text-white font-koulen leading-[20px] tracking-[0.28px] lg:tracking-[0.4px] text-[14px] lg:text-[20px] uppercase ">
                PLAY FOR FREE
              </div>
            </div>
          </MovingButton>

          <MovingButton
            duration={3000}
            containerClassName="relative w-[141px] lg:w-[178.5px] h-[40px] flex items-center justify-center !"
          >
            <Image
              fill
              src={ImgButton}
              alt="img"
              style={{ transform: "rotateY(180deg)" }}
              className=""
            />
            <div className="flex items-center gap-2 lg:gap-3 relative z-[1]">
              <Image src={IcGame} alt="img" className="" />
              <div className="text-white font-koulen leading-[20px] tracking-[0.28px] lg:tracking-[0.4px] text-[14px] lg:text-[20px] uppercase ">
                Join Community
              </div>
            </div>
          </MovingButton>
        </div>
      </div>
    </div>
  );
};
export default Banner;
