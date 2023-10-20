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
        <p className=' text-slate-gray'>Hi, my name is</p>
        <h1 className=' text-4xl text-slate-gray'>Apipark Withedvorrakit</h1>
         <h2>
            <ReactTypingEffect
            text={['A Frontend Developer', 'I create awesome modern app',]}
            speed={50}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={200}
            className=' pt-2 text-2xl text-slate-gray' />
        </h2>
        <div className='flex gap-2 pt-4'>
            <a href="https://github.com/Parkkung">
                <AiOutlineLinkedin 
                className=' h-6 w-6 text-white hover:text-indigo-600'/>
            </a>
            <a href="https://www.linkedin.com/in/apipark-withedvorrakit-244a7b296/">
                <AiOutlineGithub 
                className=' h-6 w-6 text-white hover:text-indigo-600'/>
            </a>
        </div>
        <button className=' pt-4'>
            <a href="#contact">
                <p className=' text-white border border-white py-2 px-16 rounded-full hover:text-indigo-600 hover:border-indigo-600'>Let's talk</p>
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