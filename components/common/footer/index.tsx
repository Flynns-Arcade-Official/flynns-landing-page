import React from "react";
import Image from "next/image";
import logo from "@/images/footer/logo.png";
import ic_x from "@/icons/socials/twiiter x.svg";
import ic_telegram from "@/icons/socials/telegram.svg";

const Footer = () => {
  return (
    <div className="w-full lg:h-[414px] bg-[rgba(12,14,28,1)] px-6 py-12 lg:px-[120px] lg:py-[64px]">
      <div className="w-full lg:max-w-[1200px] h-fit mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center gap-12 justify-center lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col w-[233px] lg:w-fit gap-8 lg:gap-[64px]">
            <div className="flex flex-col gap-2">
              <Image src={logo} alt="logo" className="w-[130px] h-[40px] mx-auto lg:mx-0" />
              <p className="text-sm lg:text-[20px] text-center font-medium text-[#fff] opacity-50 font-manrope">
                AI-powered NFT Games on Solana
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <span className="text-[22px] font-normal text-[#fff] font-koulen">
                Contact Us
              </span>
              <span className="text-[20px] text-center font-medium text-[#fff] opacity-50 font-manrope">
                hello@flynnsarcade.com
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2 w-[350px]">
            <span className="text-[22px] font-normal text-[#fff] font-koulen">
              Subscribe to OUR newsletter
            </span>
            <input
              type="email"
              className="h-[36px] w-full border-b border-[rgba(255,255,255,0.16)] bg-transparent font-plus-jakarta-sans p-2 outline-none placeholder:text-center lg:placeholder:text-left placeholder:text-sm font-normal placeholder:text-[#8B8D93]"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between mt-8 gap-[18px]">
          <p className="text-sm text-center font-normal font-plus-jakarta-sans text-[#fff] opacity-50">
            ©2024 ️Flynn’s Arcade. All Rights Reserved.
          </p>
          <figure className="flex items-center gap-4">
            <Image src={ic_x} alt="icon" className="w-6 h-6 min-w-6 lg:w-8 lg:h-8 lg:min-w-8" />
            <Image src={ic_telegram} alt="icon" className="w-6 h-6 min-w-6 lg:w-8 lg:h-8 lg:min-w-8" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Footer;
