import React from 'react'
import ColorChageCard from '../components/ColorChageCard';
import { experienceCard } from '../constants';

const Experience = () => {
  return (
    <section className=' h-3/4 w-full pt-44 max-sm:pt-60'>
      <h1 className=' px-10 pb-10 text-blue-600 text-4xl max-md:text-3xl'>
          Experience
      </h1>
      <div className="flex w-full gap-y-10 max-lg:gap-x-10 justify-around max-lg:justify-center items-center max-lg:flex-wrap max-container">
        { experienceCard.map((card) => (
          <ColorChageCard url={ card.url } title={ card.title } des={ card.des } date={ card.date} />
        ))}
      </div>
    </section>
  )
}

export default Experience