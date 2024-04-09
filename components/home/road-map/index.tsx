import Image from "next/image";
import React from "react";
//Img
import TitleCard from "./Card/TitleCard";
import roadmap_bg_mobile from "@/images/roadmap/Roadmap_mobile.jpg";
import PhaseCard from "./Card/PhaseCard";
import cardgame1 from "@/images/roadmap/game card.png";
import cardgame2 from "@/images/roadmap/game card-1.png";
import cardgame3 from "@/images/roadmap/game card-2.png";
import cardgame4 from "@/images/roadmap/game card-3.png";
import roadmapTitle from "@/images/roadmap/buttonBg.png";
const Roadmap = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${roadmap_bg_mobile.src})`,
                backgroundPosition: "center",
                objectFit: "cover",
            }}
            className="flex flex-col justify-center items-center bg-[rgba(5,6,13,1)] px-[64px] max-md:p-0 min-h-screen gap-6 mt-[64px]"
        >
            <div className="relative">
                <div className=" uppercase text-[#45F4FF] absolute inset-0 flex items-center justify-center text-[16px] font-[600] font-chakra-petch">
                    RoadMap
                </div>
                <Image src={roadmapTitle} alt="button" />
            </div>
            <p className="text-[rgba(255,255,255,1)] text-[32px] text-center font-bold font-chakra-petch mb-[42px]">
                {`Our Journey with Flynn’s`}
            </p>

            <section
                id="phase-1"
                className="flex flex-row max-md:flex-col max-md:gap-[16px] max-md:items-center items-start justify-center w-full relative h-[600px] max-md:h-fit"
            >
                <TitleCard phaseNumber={1} />
                <PhaseCard phaseNumber={1} />
            </section>
            <section
                id="phase-2"
                className="flex flex-row max-sm:flex-col max-sm:gap-[16px] max-sm:items-center items-start justify-center w-full relative h-[600px] max-sm:h-fit"
            >
                <TitleCard phaseNumber={2} />
                <PhaseCard phaseNumber={2} />
            </section>
            <section
                id="phase-3"
                className="flex flex-row max-sm:flex-col max-sm:gap-[16px] max-sm:items-center items-start justify-center w-full relative h-[600px] max-sm:h-fit"
            >
                <TitleCard phaseNumber={3} />
                <PhaseCard phaseNumber={3} />
            </section>
            <section
                id="phase-4"
                className="flex flex-row max-sm:flex-col max-sm:gap-[16px] max-sm:items-center items-start justify-center w-full relative h-[664px] max-sm:h-fit"
            >
                <TitleCard phaseNumber={4} />
                <PhaseCard phaseNumber={4} />
            </section>
        </div>
    );
};

export default Roadmap;
