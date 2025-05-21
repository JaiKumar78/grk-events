import { useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EventContext } from '../context/EventContext';

const ServiceCard = ({ 
    ellipseImage,
    backgroundImage,
    title,
    description,
    link }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const navigate = useNavigate();
    const {setActivePage } = useContext(EventContext)

    const handleClick = () => {
      setActivePage('/services'); // Your state handler
      navigate(`/services/${link}`); // Navigate to the route
    };

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" } // For hover effect
    }}
    className="relative w-[286.8px] h-[425px] mx-auto"
    onClick={handleClick}
    >
      {/* Top background image */}
      <div
        className="absolute top-0 left-0 right-0 h-[234px] bg-cover bg-center rounded-t-[143.4px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gray Union Shape */}
      {/* <div className="absolute top-[42.27%] left-0 right-0 bottom-[1.29%] bg-gray-500" /> */}

      {/* Gray Rectangle */}
      <div className="absolute top-[55.29%] pt-15 p-7 flex flex-col gap-3 left-0 right-0 bottom-[1.29%] bg-[#D9D9D9] shadow-md rounded-b-md">
        {/* Title */}
        <h3 className="] text-center text-[18px] font-semibold font-nunito text-black">
          {title}
        </h3>

        {/* Description */}
        <p className=" text-[12px] text-center">
          {description}
        </p>

        {/* Explore CTA */}
        <Link to={`/services/${link}`} onClick={() => setActivePage('/services')} className="text-sm hover:font-bold text-center text-main font-nunito">
          EXPLORE
        </Link>
      </div>

      {/* Ellipse Inner Circle */}
      <div className="absolute p-5 top-[41.88%] left-[30.33%] right-[30.26%] bottom-[31.53%] rounded-full bg-[#D9D9D9] flex items-center justify-center overflow-hidden shadow-md">
        <img
          src={ellipseImage}
          alt="ellipse content"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  )
}

export default ServiceCard