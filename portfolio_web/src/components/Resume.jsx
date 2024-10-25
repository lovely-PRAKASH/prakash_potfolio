import React from 'react'
import resumeImg2 from '../assets/resumeImg2.png'
const Resume = () => {
  const config={
    link:''
  }
  return (
    <section id='resume' className='flex md:flex-row flex-col justify-between bg-secondary px-5 py-20'>
      <div className='md:w-1/2 flex justify-center leftAppear'>
        <img className='w-[400px]' src={resumeImg2} alt="resume image" />
      </div>
      <div className='md:w-1/2 flex justify-center py-10'>
        <div className='flex flex-col justify-center rightAppear'>
          <h1 className='text-white text-3xl border-b-4 border-primary w-[110px] font-bold'>Resume</h1>
          <p className='text-white mt-3 justify-evenly text-justify text-xl'>You can view my Resume <a className='btn inline-block mt-2' href={config.link}>Download</a></p>
        </div>
      </div>
    </section>
  )
}

export default Resume
