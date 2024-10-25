import React from 'react'
import aboutImg from '../assets/aboutHero.png'
const About = () => {
  const config={
    line1:"Hi, I'm Parkash, I’m an Full Stack Developer with expertise in the MERN stack, crafting responsive, user-friendly web applications. From building intuitive front-end interfaces to ensuring efficient back-end functionality,",
    line2:"I deliver high-quality, scalable solutions. Passionate about learning and staying current with industry trends,I thrive on solving complex challenges and creating impactful user experiences."
  }
  return (
    <section id='about' className='flex md:flex-row flex-col justify-between bg-secondary px-5 py-20'>
      <div className='md:w-1/2 leftAppear'>
        <img src={aboutImg} alt="about image" />
      </div>
      <div className='md:w-1/2 flex justify-center py-10 rightAppear'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-white text-3xl border-b-4 border-primary w-[150px] font-bold'>About Me</h1>
          <p className='text-white mt-3 justify-evenly text-justify text-xl py-3'>{config.line1}</p>
            <p className='text-white mt-3 justify-evenly text-justify text-xl'>{config.line2}</p>
        </div>
      </div>
    </section>
  )
}

export default About
