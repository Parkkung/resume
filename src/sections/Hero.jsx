import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import heroImage from '../assets/images/pattern1.jpeg'



const Hero = () => {
  return (
    <section
    id='home'
    className='flex justify-between items-center h-screen'> 
    {/* text */}
    <div className='px-32'>
        <p className=' text-indigo-600 text-lg pb-2'>Hi, my name is</p>
        <p className=' relative group leading-relaxed  '>
            <span className=' text-4xl text-white'>Apipark Withedvorrakit</span>
            <span className="absolute -bottom-1 left-0 w-0 h-2 bg-indigo-600 rounded-full transition-all group-hover:w-full"></span>
        </p>
         <h2 className=' pt-3'>
            <ReactTypingEffect
            text={['A Frontend Developer', 'I create awesome modern app',]}
            speed={50}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={200}
            className=' text-2xl text-slate-gray' />
        </h2>
        <div className='flex gap-2 pt-4'>
            <a href=" https://www.linkedin.com/in/apipark-withedvorrakit-244a7b296/">
                <AiOutlineLinkedin 
                className=' h-6 w-6 text-white hover:text-indigo-600'/>
            </a>
            <a href="https://github.com/Parkkung">
                <AiOutlineGithub 
                className=' h-6 w-6 text-white hover:text-indigo-600'/>
            </a>
        </div>
        <button className=' pt-4'>
            <a href="#contact">
                <p className=' text-white border py-2 px-16 rounded-ful border-indigo-600 transition hover:bg-indigo-500 duration-300'>Let's talk</p>
            </a>
        </button>
    </div>
    <div>
        <img src={ heroImage }
        alt="hero"
        className=' h-[600px] relative' />
    </div>
    </section>
  )
}

export default Hero