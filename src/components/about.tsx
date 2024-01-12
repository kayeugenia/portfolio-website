"use client";

import React, { useEffect } from 'react'
import SectionHeading from "./section-heading";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
    const {ref, inView} = useInView({threshold:0.5});
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection("About");
        }
    }, [inView, setActiveSection]);

    return (
        <motion.section 
            id="about"
            ref={ref}
            className="mt-8 mb-12 lg:mt-16 lg:mb-[5rem]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}>
            <SectionHeading children={"About Me"} />
            <div className="max-w-[45rem] leading-8">
                <p className="mb-6 text-[15px] md:text-[17px]">
                    Welcome to my personal website! I'm currently a Year 2 student, studying {" "}
                    <span className="font-medium">Business Analytics</span> with a second major in {" "}
                    <span className="font-medium">Statistics</span> at the National University of Singapore.
                    My university journey began without any prior coding experience or a clear vision of my future career path. However, after doing an {" "}
                    <span className="font-medium">Independent Software Development Project</span> over the summer, I discovered that my passion lies in {" "}
                    <span className="font-medium">Web Development</span>. It's so fun to be able to create something from scratch and see it come to life! {" "}
                </p>

                <p className="text-[15px] md:text-[17px]">
                    <span className="italic">When I'm not coding</span>, I enjoy
                    watching movies and going on a food adventure. My dream is to {" "}
                    <span className="font-medium">travel the world</span> and taste all the different cuisines.
                </p>
            </div>
        </motion.section>
    )
}
