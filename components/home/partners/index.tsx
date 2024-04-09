import React from "react";
import badge from "@/public/images/partner/badge.png";
import Image from "next/image";
import PartnerCard_1 from "@/images/partner/partner card.png";
import PartnerCard_2 from "@/images/partner/partner card-1.png";
import PartnerCard_3 from "@/images/partner/partner card-2.png";
import PartnerCard_4 from "@/images/partner/partner card-3.png";
import PartnerCard_5 from "@/images/partner/partner card-4.png";
import PartnerCard_6 from "@/images/partner/partner card-5.png";
import PartnerCard_7 from "@/images/partner/partner card-6.png";
import PartnerCard_8 from "@/images/partner/partner card-7.png";
import PartnerCard_9 from "@/images/partner/partner card-8.png";
import PartnerCard_10 from "@/images/partner/partner card-9.png";
import { motion } from "framer-motion";
import { cardVariants } from "@/utils";

const Partners = () => {
    const partners = [
        PartnerCard_1,
        PartnerCard_2,
        PartnerCard_3,
        PartnerCard_4,
        PartnerCard_5,
        PartnerCard_6,
        PartnerCard_7,
        PartnerCard_8,
        PartnerCard_9,
        PartnerCard_10,
    ];
    return (
        <div className="h-full w-full flex flex-col pt-16 pb-[100px] px-[120px] gap-16 max-sm:gap-8 max-sm:py-8 max-sm:px-6 items-center">
            <div className="flex flex-col lg:h-[87px] h-full w-full items-center font-bold text-[32px] gap-3 text-center">
                <Image src={badge} alt="badge" />
                Backed by World-Class Partners
            </div>
            <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                className="h-full max-sm:w-[366px] partner gap-8 max-sm:gap-4 flex flex-wrap justify-around"
            >
                {partners.map((url_img, idx) => {
                    return (
                        <div
                            className="w-[205.67px] h-[126.72px] max-sm:h-[106px] max-sm:w-[175px]"
                            key={idx}
                        >
                            <Image
                                src={url_img}
                                className="object-cover"
                                alt="Partner"
                            />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Partners;
