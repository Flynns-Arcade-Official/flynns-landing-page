"use client";
import React from "react";
import Badge from "@/public/images/arcade/badge.png";
import Image from "next/image";
import { motion } from "framer-motion";

import Game_1 from "@/public/images/arcade/game-img.png";
import Game_2 from "@/public/images/arcade/game-img-2.png";
import Game_3 from "@/public/images/arcade/game-img-3.png";
import Game_4 from "@/public/images/arcade/game-img-4.png";
import { cardVariants } from "@/utils";

const Arcade = () => {
    const game_imgs = [Game_1, Game_2, Game_3, Game_4];
    return (
        <div className="flex flex-col lg:h-[625px] gap-16 py-16 px-[60px] w-full">
            <div className="font-bold text-[32px] items-center flex flex-col gap-3 text-center">
                <Image src={Badge} alt="badge" className="h-[38px] w-[175px]" />
                Powering the Flynn’s Arcade Ecosystem
            </div>
            <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="lg:h-[346px] w-full flex flex-row max-sm:flex-col max-sm:items-center justify-center gap-4 text-center"
            >
                {game_imgs.map((img_url, index) => {
                    return (
                        <motion.div
                            whileHover={{
                                y: -20,
                                transition: { duration: 0.3 },
                            }}
                            className="border-4 h-full w-[318px] border-[#45F4FF] rounded p-2 shadow-[0_0_32px_0_#45F4FF]"
                            key={index}
                        >
                            <Image
                                src={img_url}
                                alt="Game"
                                className="object-cover"
                            />
                            <div className="p-4 gap-[10px]">
                                <div className="font-bold text-[28px]">
                                    In-game Features
                                </div>
                                <div className="text-xs text-slate-300 font-plus-jakarta-sans">
                                    Purchase items and perks, mint exclusive NFT
                                    characters, and unlock advanced
                                    functionalities.
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Arcade;
