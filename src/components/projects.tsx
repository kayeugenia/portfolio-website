"use client";

import Image from 'next/image';
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion, useAnimation } from 'framer-motion';

export default function Projects() {
    const {ref, inView} = useInView({threshold:0.3});
    const { setActiveSection } = useActiveSectionContext();
    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
            setActiveSection("Projects");
        }
    }, [inView, setActiveSection]);
    
    return (
        <section id="projects" ref={ref} className="mt-8">
            <SectionHeading children={"My Projects"} />
            <motion.div className="flex flex-col items-center xl:justify-between xl:flex-row xl:items-start"
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.1}}>
                {projectsData.map((project, index) => (
                    <div key={index}>
                        <Project {...project}/>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}

type ProjectProps = (typeof projectsData)[number];

function Project({
    title, 
    description, 
    tags, 
    imageUrl,
    githubUrl,
    webUrl} : ProjectProps) {
    return (
        <section className="border-[1px] border-gray-200 rounded-xl p-5 my-3 xl:my-5 xl:mr-3 sm:max-w-lg md:max-w-full xl:max-w-sm flex flex-col md:flex-row xl:flex-col hover:transform-gpu hover:scale-105 transition-all" >
            <Image src={imageUrl} alt="Past Project" width={0} height={0} sizes="100vw" className="shadow-md rounded-lg w-auto h-full md:w-[50%] xl:w-auto md:mt-auto md:mb-auto" />
            <div className="md:ml-6 xl:ml-0">
                <h3 className="text-xl font-[500] mt-2">{title}</h3>
                <p className="text-sm mt-2">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2">
                    {tags.map((tag, index) => (
                        <li className="text-xs font-mono mx-1" key={index}>{tag}</li>
                    ))}
                </ul>
                <div className="flex flex-start mt-4">
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <img src="/images/github.svg" alt="GitHub Link" className="h-6 w-6 mr-4 hover:transform-gpu hover:scale-110" />
                        </a>
                    )}
                    {webUrl && (
                        <a href={webUrl} target="_blank" rel="noopener noreferrer">
                            <img src="/images/link.png" alt="Web Link" className="h-5 w-5 mt-[0.15rem] hover:transform-gpu hover:scale-110" />
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}