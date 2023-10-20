import { motion, useScroll, useSpring } from 'framer-motion'
import React from 'react'

const ScrollProgress = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring( scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

  return (
    <>
    <motion.div 
    style={{ scaleX }}
    className=' fixed top-0 left-0 right-0 h-2 bg-purple-500 origin-[0%] z-30' />

    </>
  )
}

export default ScrollProgress