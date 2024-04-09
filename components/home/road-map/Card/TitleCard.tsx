"use client";
import React, { useEffect, useRef } from "react";
import phase1 from "@/public/images/roadmap/phase1.png";
import phase2 from "@/public/images/roadmap/phase2.png";
import phase3 from "@/public/images/roadmap/phase3.png";
import phase4 from "@/public/images/roadmap/phase4.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
type Props = {
    phaseNumber: number;
};
const phaseInformation = [
    {
        phaseNumber: "01",
        background: phase1,
        color: "#45F4FF",
    },
    {
        phaseNumber: "02",
        background: phase2,
        color: "#45FF79",
    },
    {
        phaseNumber: "03",
        background: phase3,
        color: "#FFF38B",
    },
    {
        phaseNumber: "04",
        background: phase4,
        color: "#F2562F",
    },
];

export default function TitleCard({ phaseNumber }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });
    useEffect(() => {
        console.log("Element is in view: ", isInView);
    }, [isInView]);
    return (
        <div className=" flex flex-col items-center">
            <div className="relative">
                <Image
                    src={phaseInformation[phaseNumber - 1].background}
                    alt="phase1"
                />
                <div className="flex flex-col items-center gap-4 justify-center absolute inset-0 text-white text-base font-normal">
                    <p>PHASE</p>
                    <p
                        className=" text-[48px] font-bold font-chakra-petch"
                        style={{
                            color: `${phaseInformation[phaseNumber - 1].color}`,
                        }}
                    >
                        {phaseInformation[phaseNumber - 1].phaseNumber}
                    </p>
                </div>
            </div>
            <motion.div
                initial={{ height: "0px" }}
                animate={{ height: isInView ? "600px" : "0px" }}
                exit={{ height: isInView ? "0px" : "600px" }}
                transition={{
                    type: "spring",
                    ease: "easeInOut",
                    duration: 2,
                }}
                ref={ref}
                className=" overflow-hidden max-sm:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="500"
                    viewBox="0 0 4 750"
                    fill="none"
                >
                    <path
                        d="M2 0L1.99997 747"
                        stroke="url(#paint0_linear_97_3431)"
                        stroke-width="6"
                        stroke-linecap="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_97_3431"
                            x1="-1"
                            y1="4.47809e-07"
                            x2="-1.00003"
                            y2="747"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#F5F7F7" />
                            <stop offset="1" stop-color="#00D1FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </div>
    );
}
