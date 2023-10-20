import React from 'react'
import { databases, frameworks, languages, others } from '../constants'
import { motion } from 'framer-motion'

const Skills = () => {

    const fadeInAnimationsVariants = {
        initial : {
            opacity : 0,
            y : 200,
        },
        animate : (custom) => ({
            opacity : 1,
            y : 0,
            transition: {
                delay: 0.1 * custom
            }
        }),
    }


  return (
    <section className=' px-10 h-[75vh] w-full' id='resume'>
        <div className=''>

        <div className=' flex flex-col'>
            <motion.p 
            className=' text-white'
            variants={ fadeInAnimationsVariants }
            initial= "initial"
            whileInView= "animate"
            viewport={{
                once: true,
            }}>
                        SKILLS
            </motion.p>
            <motion.h1 
            className=' text-blue-700 text-4xl'
            variants={ fadeInAnimationsVariants }
            initial= "initial"
            whileInView= "animate"
            viewport={{
                once: true,
            }}>
                My Skills
            </motion.h1>
        </div>
        <div className=' pt-5'>
            <motion.p
            className=' text-slate-gray'
            variants={ fadeInAnimationsVariants }
            initial= "initial"
            whileInView= "animate"
            viewport={{
                once: true,
            }}>
                LANGUAGE & TOOLS
            </motion.p>
            <div className=' flex flex-wrap gap-6 pt-5 '>
                { languages.map((logo) => (
                    <motion.img src={ logo.src } 
                    alt={ logo.alt } 
                    width={ 48 }
                    height={ 48 }
                    variants={ fadeInAnimationsVariants }
                    initial= "initial"
                    whileInView= "animate"
                    viewport={{
                        once: true,
                    }}
                    custom = {logo.index}
                    />
                ))}
            </div>
        </div>
        <div className=' pt-5'>
        <motion.p
            className=' text-slate-gray'
            variants={ fadeInAnimationsVariants }
            initial= "initial"
            whileInView= "animate"
            viewport={{
                once: true,
            }}>
                LIBRARIES & FRAMEWORK
            </motion.p>
            {/* image */}
            <div className=' flex gap-6 pt-5 '>
                { frameworks.map((logo) => (
                    <motion.img src={ logo.src } 
                    alt={ logo.alt } 
                    width={ 48 }
                    height={ 48 }
                    variants={ fadeInAnimationsVariants }
                    initial= "initial"
                    whileInView= "animate"
                    viewport={{
                        once: true,
                    }}
                    custom = {logo.index}/>
                ))}
            </div>
        </div>
        <div className=' flex pt-5 gap-x-40'>
        <div>
        <motion.p
            className=' text-slate-gray'
            variants={ fadeInAnimationsVariants }
            initial= "initial"
            whileInView= "animate"
            viewport={{
                once: true,
            }}>
                DATANBASES
            </motion.p>
            {/* image */}
            <div className=' flex gap-5 pt-5 '>
                { databases.map((logo) => (
                    <motion.img src={ logo.src } 
                    alt={ logo.alt } 
                    width={ 48 }
                    height={ 48 }
                    variants={ fadeInAnimationsVariants }
                    initial= "initial"
                    whileInView= "animate"
                    viewport={{
                        once: true,
                    }}
                    custom = {logo.index*3}/>
                ))}
            </div>
        </div>
        <div>
        <motion.p
            className=' text-slate-gray'
            variants={ fadeInAnimationsVariants }
            initial= "initial"
            whileInView= "animate"
            viewport={{
                once: true,
            }}>
                OTHERS
            </motion.p>
            {/* image */}
            <div className=' flex gap-5 pt-5 '>
                { others.map((logo) => (
                    <motion.img src={ logo.src } 
                    alt={ logo.alt } 
                    width={ 48 }
                    height={ 48 }
                    variants={ fadeInAnimationsVariants }
                    initial= "initial"
                    whileInView= "animate"
                    viewport={{
                        once: true,
                    }}
                    custom = {logo.index*3}/>
                ))}
            </div>
        </div>
        </div>
        </div>
    </section>  
  )
}

export default Skills