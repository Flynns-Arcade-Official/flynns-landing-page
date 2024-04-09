"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/images/header/logo.png";
import bgBtn from "@/images/header/bgButton.png";
import vector from "@/images/header/vector.png";
import hamburger from "@/images/header/hamburger.png";
import Link from "next/link";

const Header = () => {
    const menu = [
        {
            id: 1,
            title: "Game",
            link: "",
        },
        {
            id: 2,
            title: "Tokenomics",
            link: "",
        },
        {
            id: 3,
            title: "Roadmap",
            link: "",
        },
        {
            id: 4,
            title: "Community",
            link: "",
        },
    ];
    const [openModal, setOpenModal] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full flex justify-center fixed top-0 left-0 z-50 ${
                scrollPosition > 600 ? "bg-[#05060D]" : ""
            }`}
        >
            <div className="w-full max-w-[1440px] md:px-[40px] px-[20px] py-[20px] flex justify-between items-center relative z-20">
                <Link href="/">
                    <div className="w-[132px] h-[40px] cursor-pointer">
                        <Image src={logo} alt="logo" objectFit="cover" />
                    </div>
                </Link>
                <div className="md:flex items-center md:gap-[32px] hidden">
                    <div className="flex items-center gap-[32px]">
                        {menu.map((item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="py-[11.5px] text-[18px] font-normal leading-[18px] tracking-[0.18px] font-koulen text-[rgba(255,255,255,0.75)] cursor-pointer uppercase"
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-[129.3px] h-[43.2px] relative cursor-pointer">
                        <Image
                            src={bgBtn}
                            alt="background button"
                            objectFit="cover"
                        />
                        <div className="w-[46.413px] h-[21.29px] absolute top-[0.28px] right-[3.55px]">
                            <Image
                                src={vector}
                                alt="vector"
                                objectFit="cover"
                            />
                        </div>
                        <div className=" absolute right-[2.27px] top-[1.99px] w-[125.47px] h-[36.9px] border-[1.65px] border-solid border-[#45F4FF] rounded-[4px] flex justify-center items-center text-[#00FFF0] text-[17.6px] font-normal leading-[17.6px] tracking-[0.352px]">
                            PLAY FOR FREE
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setOpenModal(!openModal)}
                    className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer md:hidden"
                >
                    <div className="w-[24px] h-[24px]">
                        <Image
                            src={hamburger}
                            alt="hamburger icon"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
            {openModal && (
                <div className="inset-0 fixed bg-[rgba(0,0,0,0.8)] flex justify-center px-[50px] pt-[170px]">
                    <div className="flex flex-col items-center gap-[32px]">
                        {menu.map((item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="py-[11.5px] text-[18px] font-normal leading-[18px] tracking-[0.18px] font-koulen text-[rgba(255,255,255,0.75)] cursor-pointer uppercase"
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
