"use client";
import React, { useRef } from "react";
import phase1 from "@/images/roadmap/phase1Content.png";
import phase2 from "@/images/roadmap/phase2Content.png";
import phase3 from "@/images/roadmap/phase3Content.png";
import phase4 from "@/images/roadmap/phase4Content.png";
import Image from "next/image";

import { motion, useInView } from "framer-motion";

import cardgame1 from "@/images/roadmap/game card.png";
import cardgame2 from "@/images/roadmap/game card-1.png";
import cardgame3 from "@/images/roadmap/game card-2.png";
import cardgame4 from "@/images/roadmap/game card-3.png";
type Props = {
    phaseNumber: number;
};
const contentPhase = [
    {
        image: phase1,
        alt: "phase1Content",
        cardgame: cardgame1,
    },
    {
        image: phase2,
        alt: "phase2Content",
        cardgame: cardgame3,
    },
    {
        image: phase3,
        alt: "phase3Content",
        cardgame: cardgame2,
    },
    {
        image: phase4,
        alt: "phase4Content",
        cardgame: cardgame4,
    },
];
export default function PhaseCard({ phaseNumber }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    return (
        <motion.div
            // ref={ref}
            // initial={{ y: 0 }}
            // animate={{ y: isInView ? 0 : -100 }}
            // transition={{
            //     type: "spring",
            //     ease: "easeInOut",
            //     duration: 2,
            // }}
            className={`absolute max-md:relative inset-0 flex max-sm:flex-col items-start justify-between ${
                phaseNumber == 2 || phaseNumber == 4
                    ? " flex-row-reverse"
                    : "flex-row"
            } `}
        >
            <Image
                src={contentPhase[phaseNumber - 1].cardgame}
                alt="cardgame"
                className="self-center max-sm:hidden"
            />
            <Image
                src={contentPhase[phaseNumber - 1].image}
                alt={contentPhase[phaseNumber - 1].alt}
            />
        </motion.div>
    );
}
