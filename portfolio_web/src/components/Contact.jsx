import React from 'react'
import contactImg from '../assets/contactUs.png'
const Contact = () => {
    const config={
        email:"prakash.arthanari2002@gmail.com",
        phone:"+91-999999999"
    }
    return (
        <section id='contact' className='flex md:flex-row flex-col justify-between bg-primary px-5 py-20'>
            <div className='md:w-1/2 flex justify-center py-10 text-white '>
                <div className='flex flex-col items-center justify-center textAppear'>
                    <h1 className='text-3xl border-b-4 border-secondary w-[110px] font-bold'>Contact</h1>
                    <p className='mt-3 justify-evenly text-justify text-xl py-2'>If your want to discuss more in detail, Please contact me.</p>
                    <p className='py-2'><span className='font-bold'>Email: </span><a href="mailto:prakash.arthanari2002@gmail.com">{config.email}</a></p>
                    <p className='py-2'><span className='font-bold'>Phone: </span>{config.phone}</p>
                </div>
            </div>
            <div className='md:w-1/2 flex justify-center items-center rightAppear'>
                <img className='w-[400px]' src={contactImg} alt="resume image" />
            </div>

        </section>
    )
}

export default Contact;
