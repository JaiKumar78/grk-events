import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceRepCard = ({ img, title, description }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
     <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-[265px] h-[400px] flex flex-col gap-10 items-center justify-center border-[5px] border-[#0A4A4A] rounded-t-full bg-white rounded-[10px]"
        >
            {/* Image */}
            <div className="p-3 bg-cover bg-center">
                <img
                src={img}
                alt="service"
                className="h-28 w-28 object-cover"
                />
            </div>

            {/* Description */}
            <div className="px-3 text-center">
                <p className="text-[18px] leading-[28px] font-nunito text-black">
                {description}
                </p>
            </div>

            {/* Button-like Title */}
            <div className="absolute top-[95.5%] bg-[#D6A84B] px-5 py-2 rounded-sm">
                <p className="text-white font-nunito font-bold text-[16px] leading-[24px] text-center">
                {title}
                </p>
            </div>
        </motion.div>

  );
};

export default ServiceRepCard;