"use client";

import BgChart from "@/images/chart/bg-chart.svg";
import Image from "next/image";
import Badge from "@/public/images/arcade/badge.png";
import MyPieChart from "./MyPieChart";
import { motion } from "framer-motion";
import { cardVariants } from "@/utils";

const Chart = () => {
    const data = [
        { name: "Listing & Liquidity", value: 10, color: "#5356FF" },
        { name: "Flynn’s Treasury", value: 5, color: "#9195F6" },
        { name: "Team & Advisor", value: 10, color: "#1D24CA" },
        { name: "Public Sale", value: 15, color: "#DFF5FF" },
        { name: "Private Sale", value: 20, color: "#67C6E3" },
        { name: "Airdrop", value: 40, color: "#378CE7" },
    ];

    return (
        <div className="hidden lg:flex flex-col item-center justify-center py-[64px] px-[60px] ">
            <div className="font-bold text-[32px] items-center flex flex-col gap-3 text-center">
                <Image src={Badge} alt="badge" className="h-[38px] w-[175px]" />
                Powering the Flynn’s Arcade Ecosystem
            </div>

            <div className="mt-[64px] text-white mb-[15px] text-center font-chakra-petch text-[32px] font-bold tracking-[-0.32px]">
                Token Allocation
            </div>

            <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="relative  flex item-center justify-center "
            >
                <Image
                    draggable={false}
                    src={BgChart}
                    alt="BgChart"
                    fill
                    className={`absolute z-0`}
                />
                <div className="p-[48px] relative z-[1]">
                    <MyPieChart data={data} width={700} height={400} />
                </div>
            </motion.div>
        </div>
    );
};

export default Chart;
