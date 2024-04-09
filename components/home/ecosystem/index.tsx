"use client";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

import Grid from "@/images/ecosystem/grid.png";
import Badge from "@/images/ecosystem/badge.png";
import Rectangle from "@/images/ecosystem/rectangle.png";
import Image_Game1 from "@/images/ecosystem/img-game01.png";
import Image_Game2 from "@/images/ecosystem/img-game02.png";
import Image_Game3 from "@/images/ecosystem/img-game03.png";
import { cardVariants } from "@/utils";

const Ecosystem = () => {
    const game_imgs = [
        {
            image: Image_Game1,
            title: "PLAY FOR FREE",
            description: "Download the Flynn’s Arcade app on mobile devices.",
            btn_title: "Explore the Arcade",
        },
        {
            image: Image_Game2,
            title: "Earn Arcade Points",
            description:
                "Play games and accumulate Points, redeem them for $ARCADE tokens in the future..",
            btn_title: "View token",
        },
        {
            image: Image_Game3,
            title: "DAO Governance",
            description:
                "Vote on proposals that direct the game and ecosystem.",
            btn_title: "Comming soon",
        },
    ];
    return (
        <div className="h-[839] max-sm:w-[378.67px] w-full gap-8 p-[64px_120px_120px_120px] max-sm:p-[64px_24px_64px_24px] flex flex-col relative items-center">
            <Image src={Grid} alt="grid" className="absolute top-3" />
            <div className="flex flex-col gap-8 items-center">
                <div className="h-[87px] w-full flex items-center flex-col gap-3 font-bold text-[32px] ">
                    <Image src={Badge} alt="logo" />
                    Explore Flynn’s Arcade
                </div>
                <div className="w-[624px] max-sm:w-[366px] h-[40px] text-center font-plus-jakarta-sans text-sm text-slate-300">
                    {`Our mission is to infuse vitality into NFTs while uniting NFT
          communities. Delve into Flynn’s ecosystem and games, and prepare for
          an innovative NFT gaming experience.`}
                </div>
            </div>

            <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="lg:h-[432px] h-full gap-16 max-sm:gap-8 w-full flex lg:flex-row flex-col items-center"
            >
                {game_imgs.map((item, index) => (
                    <div
                        className="w-[378px] lg:h-[416px] max-sm:w-[378.67px] h-full top-2 relative overflow-hidden group "
                        key={index}
                    >
                        <Image
                            src={Rectangle}
                            alt="rec"
                            className="top-[0.33px]"
                        />
                        <div className="relative border-[3px] border-[#45F4FF] overflow-hidden">
                            <Image
                                src={item.image}
                                alt="img-game"
                                className="object-cover overflow-hidden group-hover:scale-125 duration-300"
                            />{" "}
                            <div className="absolute w-full h-full top-0 bottom-0 bg-gray-900 opacity-40"></div>
                            <motion.div
                                whileHover={{
                                    y: -64,
                                    transition: { duration: 0.3 },
                                }}
                                className="absolute inset-0 flex flex-col justify-end gap-4 p-6 text-center items-center -bottom-16"
                            >
                                <div className="font-bold font-paladins-condensed text-[#FFF38B] text-[18px]">
                                    {item.title.toUpperCase()}
                                </div>
                                <div className="text-2xl">
                                    {item.description.toUpperCase()}
                                </div>
                                <button className="bg-[#45F4FF] w-fit px-4 py-2 text-black">
                                    {item.btn_title}
                                </button>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Ecosystem;
