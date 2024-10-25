import React from 'react'
import devHero from '../assets/devHero2.png'
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
    const config={
        subtitle:"I'm an Full-stack Developer",
        linkedin:"https://www.linkedin.com/in/prakash-arthanarisamy-2a1323204/",
        gitHub:"https://github.com/lovely-PRAKASH",
        instagram:"",
        twitter:""
    }
    return (
            <section id='home' className='flex flex-col md:flex-row bg-primary px-5 py-20 justify-center'>
                <div className='md:w-1/2 flex flex-col slideInLeft justify-center'>
                    <h1 className=' text-white text-5xl font-Sriracha'>Hello,<br />I'm <span className='text-black'>Prakash</span> Arthanarisamy<br />
                        <p className='text-2xl'>{config.subtitle}</p></h1>
                        <div className='flex gap-5 py-4 '>
                            <a href={config.linkedin} className='hover:text-white'><FaLinkedin size={30}/></a>
                            <a href={config.gitHub} className='hover:text-white'><AiOutlineGithub size={30}/></a>
                            <a href={config.instagram} className='hover:text-white'><AiOutlineInstagram size={30}/></a>
                            <a href={config.twitter} className='hover:text-white'><BsTwitterX size={30}/></a>
                        </div>
                </div>
                <div className='md:w-1/3 slideInRight'>
                <img src={devHero} alt="programmer pic"  />
                </div>
            </section>
    )
}

export default Hero
