import Image from "next/image";
import React from "react";
import gameHeader from "@/images/game/gameHeader.gif";
import arrow from "@/images/game/arrow flickering.gif";
// import gameMachine from "@/images/game/gameArcade.svg";
import gameMachine from "@/images/game/game.gif";
import GameSlide from "./Slider/GameSlide";
import { motion } from "framer-motion";
import { cardVariants } from "@/utils";
const Game = () => {
    return (
        <motion.div className="flex flex-col items-center justify-center max-sm:py-[64px] w-full">
            <div className="flex items-center justify-center relative ">
                {/* <div className="flex justify-between items-center absolute top-[8%] right-[5%] max-sm:right-[10%]">
                    <Image
                        src={arrow}
                        alt=""
                        className="w-[80px] max-sm:w-[30px]"
                    />
                    <Image
                        src={gameHeader}
                        alt="gameHeader"
                        className="w-[450px] max-sm:w-[250px]"
                    />
                    <Image
                        src={arrow}
                        alt="arrow"
                        className="rotate-180 w-[80px] max-sm:w-[30px]"
                    />
                </div> */}

                <Image
                    unoptimized={true}
                    src={gameMachine}
                    alt="machine"
                    className=" object-cover"
                />
                <GameSlide />
            </div>
        </motion.div>
    );
};

export default Game;
