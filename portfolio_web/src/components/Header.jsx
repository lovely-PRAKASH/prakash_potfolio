import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
 const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className='flex justify-between px-5 py-2 bg-secondary'>
      <a className='font-bold hover:text-white duration-500' href="/">Prakash Arthanarisamy</a>
      <nav className='hidden md:block'>
        <ul className='flex gap-3 text-white font-semibold'>
          <li><a onClick={() => setToggleMenu(!toggleMenu)} href="/">Home</a></li>
          <li><a onClick={() => setToggleMenu(!toggleMenu)} href="#about">About</a></li>
          <li><a onClick={() => setToggleMenu(!toggleMenu)} href="#projects">Projects</a></li>
          <li><a onClick={() => setToggleMenu(!toggleMenu)} href="#resume">Resume</a></li>
          <li><a onClick={() => setToggleMenu(!toggleMenu)} href="#contact">Contact</a></li>
        </ul>
      </nav>
      {
        toggleMenu && <nav className='block md:hidden '>
          <ul className='flex flex-col gap-2 text-white font-semibold mobile-nav'>
            <li><a onClick={() => setToggleMenu(!toggleMenu)} href="/">Home</a></li>
            <li><a onClick={() => setToggleMenu(!toggleMenu)} href="#about">About</a></li>
            <li><a onClick={() => setToggleMenu(!toggleMenu)} href="#projects">Projects</a></li>
            <li><a onClick={() => setToggleMenu(!toggleMenu)} href="#resume">Resume</a></li>
            <li><a onClick={() => setToggleMenu(!toggleMenu)} href="#contact">Contact</a></li>
          </ul>
        </nav>
      }
      <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>
  )
}

export default Header
