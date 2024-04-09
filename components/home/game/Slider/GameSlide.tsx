"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import currentSlide from "@/images/game/currentSlide.png";
import game1 from "@/images/game/game1.png";
import game2 from "@/images/game/game2.png";
import game3 from "@/images/arcade/game-img-4.png";
import game4 from "@/images/arcade/game-img-2.png";
import game5 from "@/images/arcade/game-img-3.png";

type Props = {};

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-coverflow";
import Image from "next/image";

export default function GameSlide({}: Props) {
    const GameCard = ({ id }: { id: number }) => {
        return (
            <div className=" w-[400px] lg:w-[300px] md:w-[200px] max-sm:w-[150px] h-[136px] lg:h-[200px] max-sm:h-[100px] md:h-[150px] relative">
                <Image
                    src={currentSlide}
                    fill
                    alt="game1"
                    className=" object-fill z-[2]"
                />
                <Image
                    src={id == 1 ? game1 : id == 2 ? game2 : game3}
                    alt="game1"
                    fill
                    className="object-fill z-[1]"
                />
            </div>
        );
    };
    return (
        <div className="absolute inset-0 overflow-hidden flex flex-col  items-center justify-center content-center font-chakra-petch">
            <div className="flex flex-col w-[80%] gap-2 mt-7 items-center justify-center overflow-hidden">
                <span
                    style={{
                        color: "var(--white-50, rgba(255, 255, 255, 0.50))",
                    }}
                    className="font-bold text-[19px] max-sm:text-[8px] "
                >{`Delve into Flynn's Games`}</span>
                <div className=" flex items-center justify-center content-center max-sm:w-full">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={20}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 1,
                            depth: 300,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        modules={[Autoplay, EffectCoverflow]}
                        className="w-[1000px]"
                    >
                        <SwiperSlide>
                            <GameCard id={1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <GameCard id={2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <GameCard id={3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <GameCard id={4} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
