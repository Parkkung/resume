import React from 'react'
import { GiTriangleTarget } from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { navLinks } from '../constants'
import MobileNav from './MobileNav'

const Nav = () => {
  return (
    <header className=' w-full fixed top-0'>
        <nav className="max-container flex justify-between items-center px-3 pt-3 z-30">
            <a href='#home' className='cursor-pointer'>
            <GiTriangleTarget 
            className=' h-8 w-8 text-white'
            />
            </a>
            <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray cursor-pointer'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        <MobileNav />
    </header>
  )
}

export default Nav