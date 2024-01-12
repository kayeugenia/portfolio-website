"use client";

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import SectionHeading from './section-heading';
import { contactData } from '@/lib/data';
import { motion, useAnimation } from 'framer-motion';

export default function Contact() {
    const {ref, inView} = useInView();
    const { activeSection, setActiveSection } = useActiveSectionContext();
    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
            setActiveSection("Contact");
        }
        console.log(activeSection);
    }, [inView, setActiveSection]);
    
    return (
        <section id="contact" ref={ref} className="mt-8 mb-3">
            <SectionHeading children={"Let's get in touch!"} />
            <div className="flex justify-center flex-col sm:flex-row sm:-translate-x-6 md:translate-x-2">
                <div className="flex justify-center">
                    <img src="/images/waving.gif" alt="Hello!" className="h-[10rem] sm:h-[12rem] pr-5"/>
                </div>
                <div className="contact-container flex items-center justify-center sm:justify-start pl-5">
                    <motion.div className="logos-container"
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 0.25}}>
                        {contactData.map((contact, index) => (
                            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="logo-container flex items-center" key={index}>
                                <img src={contact.icon} className="w-8 my-3 sm:w-9"></img>
                                <span className="pl-2 text-sm sm:text-[16px]">{contact.name}</span>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
