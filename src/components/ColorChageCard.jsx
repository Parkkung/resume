import React from 'react';
import { motion } from 'framer-motion';

const ColorChangeCard = ({ url, title, des, date }) => {
  return (
    <div className='group w-[300px] h-[300px] rounded-md shadow-lg transition-transform relative delay-300'>
      <motion.img
        src={url}
        alt={title}
        className='w-full h-full object-cover mb-2 group-hover:grayscale gra'
      />
      <motion.div
        className='flex flex-col items-center justify-center font-palanquin z-10 absolute w-full  
        bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg h-[150px]  opacity-0 group-hover:opacity-100 duration-500'
        initial={{ y: '100%' }}
        animate={{ y: '-150%' }} // Adjust the value to control the reveal height
        exit={{ y: '100%' }}
      >
        <h1 className='text-xl font-bold'>
          {title}
        </h1>
        <p>
          {des}
        </p>
        <span className='text-sm'>
          {date}
        </span>
      </motion.div>
    </div>
  );
};

export default ColorChangeCard;
