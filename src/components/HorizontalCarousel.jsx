import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { projectCard } from "../constants";

const HorizontalCarousel = () => {

    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["35%", "-95%"]);


  return (
    <div ref={ targetRef }
    className=" relative h-[200vh]">
        <div className=" sticky top-0 flex h-screen items-center overflow-hidden max-w-[100vw]">
            <motion.div
            style={{ x }}
            className=" flex gap-6"
            >
                { projectCard.map((card) => (
                   <div key={card.id}
                   className=" group relative h-[350px] w-[450px] max-md:w-[270px] max-md:h-[210px] bg-neutral-200">
                        <a href={ card.url }>  
                          <img 
                          src={ card.name } 
                          alt={card.title}
                          className=" bg-cover bg-center absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 h-[350px] w-[450px]"
                          />
                        </a>
                        {/* <div className=" absolute inset-0 z-10 grid place-content-center">
                            <p className=" bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-bold uppercase text-white backdrop-blur-lg">
                                {card.title}
                            </p>
                        </div> */}
                   </div> 
                ))}
            </motion.div>
        </div>

    </div>
  )
}

export default HorizontalCarousel