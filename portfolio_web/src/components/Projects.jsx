import React from 'react'
import ecommerceImg from '../assets/e-commerce.jpg'
import imdbCloneImg from '../assets/imdb-clone.png'
import muiDesign from '../assets/muiDesign.png'
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    const config = {
        projects: [
            {
                name: "GoCart e-commerce website",
                image: ecommerceImg,
                description: "An e-commerce website build on ReactJs, NodeJS & Bootstrap css",
                link: 'https://github.com/lovely-PRAKASH/fullstack-ecommerce-app'
            },
            {
                name: "Imdb-clone website",
                image: imdbCloneImg,
                description: "An Imbd-clone website build on ReactJs, NodeJS & Tailwind css",
                link: 'https://lovely-prakash.github.io/imdb-clone/'
            },
            {
                name: "Social Media website design",
                image: muiDesign,
                description: "An social Media design with Metrial UI",
                link: 'https://prakash-dev007.netlify.app'
            }
        ]
    }
    return (
        <section id='projects' className='flex flex-row bg-primary py-20 px-10'>
            <div className='w-full'>
                <div className=' flex flex-col text-white leftAppear '>
                    <h1 className='border-b-4 border-secondary justify-center text-3xl font-bold w-[120px]'>Projects</h1>
                    <p className='flex-col py-5 font-semibold'>This is are some of my best projects. I have build these with ReactJS, NodeJs, Bootstrap, Tailwind & vanila css. check them out. </p>
                </div>
                <div className='flex flex-col md:flex-row gap-5 px-10 py-5 text-white justify-evenly items-center rightAppear'>
                    {config.projects.map((project) => (
                        <div className='relative '>
                            <img className='h-[200px] w-[300px]' src={project.image} alt={project.name} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'><a className='btn justify-center items-center flex gap-2' target='_blank' href={project.link}><FiExternalLink className=""/>View Project</a></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
