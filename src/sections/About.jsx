import React from 'react';
import ScrollText from '../components/ScrollText';

const About = () => {

  return (
    <section id='about' className='w-full h-[80vh]'>
      <ScrollText
        text1="I'm a passionate Frontend Developer who's loved to create friendly and efficiency website."
        text2="I have a positive mind and always up for new challenges "
      />
    </section>
  );
};

export default About;
