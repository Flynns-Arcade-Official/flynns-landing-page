"use client";
import About from "@/components/home/about";
import Arcade from "@/components/home/arcache";
import Banner from "@/components/home/banner";
import Chart from "@/components/home/chart";
import Ecosystem from "@/components/home/ecosystem";
import Game from "@/components/home/game";
import Partners from "@/components/home/partners";
import Roadmap from "@/components/home/road-map";
import { useScroll } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
    return (
        <div className=" max-w-[1440px] mx-auto">
            <Banner />
            <About />
            <Ecosystem />
            <Game />
            <Arcade />
            <Chart />
            <Roadmap />
            <Partners />
        </div>
    );
};

export default Home;
