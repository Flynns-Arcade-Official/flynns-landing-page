import React from "react";
import Image from "next/image";
import badge from "@/public/images/about/badge.png";
import pattern from "@/public/images/about/bg-pattern.png";

import moduleName from "@/images/about/Vector 25.png";
import union from "@/images/about/Union.svg";

import { motion } from "framer-motion";

import ReactPlayer from "react-player";
import { cardVariants } from "@/utils";
const About = () => {
    return (
        <div className="flex flex-col max-md:gap-[32px] md:flex-row md:justify-between px-[24px] md:px-[120px] py-[64px] relative">
            <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="flex flex-col gap-[24px]"
                style={{
                    backgroundImage: `url(${pattern.src})`,
                    backgroundPosition: "center",
                    objectFit: "cover",
                }}
            >
                <div className="flex flex-col gap-3">
                    <button className="cursor-pointer">
                        <Image src={badge} alt="badge" />
                    </button>
                    <div className="font-chakra-petch text-[24px] md:text-[32px] font-bold text-[#FFF] w-full md:max-w-[655px]">
                        Flynn’s Engine: Transform Static NFTs into Dynamic 3D Game Characters
                    </div>
                </div>
                <div className="text-[rgba(255,255,255,0.75)] text-[14px] font-normal font-plus-jakarta-sans w-full  md:max-w-[655px]">
                    At the heart of Flynn’s Arcade lies an innovative engine that animates static NFTs. Upon app
                    activation, users’ wallets undergo scanning to detect compatible NFTs. Once identified, the engine
                    utilises advanced AI algorithms to smoothly convert the 2D images of the NFTs into lively 3D
                    characters within the gaming realm.
                </div>
            </motion.div>
            <div className="relative bg-[#45F4FF] overflow-hidden w-[641px] max-sm:w-[345px] max-sm:h-[345px] h-[351px] z-0 flex justify-center items-center p-1  rounded-2xl">
                <video
                    className=" rounded-2xl object-cover w-full h-full"
                    preload="none"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                >
                    <source src="video/FlynnArcade.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <ReactPlayer className="" width="100%" height="100%" controls={false} url="video/FlynnArcade.mp4" /> */}
            </div>
        </div>
    );
};

export default About;
