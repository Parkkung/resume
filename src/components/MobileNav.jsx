import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

const MobileNav = () => {

    const menuVariants = {
        hidden: {
          scale: 0,
        },
        show: {
            scale: 1,
            transformOrigin: 'center',
            transition: {
              ease: [0.6, 0.01, -0.05, 0.9],
            },
        },
      }

      

      const [ openMenu, setopenMenu ] = useState(false);


  return (
    <nav className=' text-primary lg:hidden w-full'>
            <div onClick={ () => setopenMenu(!openMenu)}
            className=' text-xl cursor-pointer top-4 right-2 fixed '>
                <RxHamburgerMenu
                className=' h-6 w-6 text-white' />
            </div>
            <motion.div
            variants = { menuVariants }
            initial = ' hidden '
            animate = { openMenu ? 'show' : 'hidden'}
            className=' bg-black/80 absolute w-full h-[100vh] z-20 flex flex-row-reverse justify-center items-center'>
                <div onClick={ () => setopenMenu(false)}>
                    <IoMdClose
                    className='h-6 w-6 text-white cursor-pointer mb-[250px] ml-[20px]' />
                </div>
                <ul className=' flex flex-col h-full justify-center items-cente gap-y-4 text-purple-400 font-palanquin font-bold text-3xl'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className='cursor-pointer'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
    </nav>
  )
}

export default MobileNav