"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const {ref, inView} = useInView({threshold: 0.5});
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection("Home");
        }
    }, [inView, setActiveSection]);
    
    return (
        <section ref={ref}>
            <div className="flex flex-col pt-0 sm:pt-4 md:justify-between lg:flex-row">
                <motion.div
                    className="mt-0 lg:mt-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "tween",
                    duration: 0.2,
                    }}>
                    <p className="font-mono">Hi! my name is</p>
                    <div className="py-3">
                        <TypeAnimation sequence={['Kay', 800, 'Eugenia', 500, 'Kay Eugenia']} wrapper="span" className={`${inter.className} text-5xl font-bold text-gray-950 text-[3rem] sm:text-[4rem]`} speed={30} deletionSpeed={25}/>
                    </div>
                    <p className={`${inter.className} text-[1.5rem] sm:text-[2rem] text-zinc-400`}>
                        Business Analytics student at NUS 
                    </p>
                    <p className="py-2 text-zinc-600 font-mono">
                        Aspiring software engineer 💻 | Food lover 🍕 | Traveller 🗺
                    </p>
                    <motion.div className="py-4 sm:py-8"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                        delay: 0.3,
                        }}>
                        <a
                            className= "group border-2 border-zinc-600 w-[250px] px-7 py-2 flex items-center gap-2 rounded-xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer font-semi-bold"
                            href="/Kay Eugenia Purnama's Resume.pdf"
                            download
                            >
                            Download Resume{" "}
                            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div className="flex items-center justify-center pt-3 px-5 lg:pt-0"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "tween",
                    duration: 0.2,
                    }}>
                    <Image src="/images/photo.png" 
                    width="450" 
                    height="450"
                    alt="portfolio photo"
                    className="w-[300px] object-fit md:w-[350px] lg:w-[400px] rounded-3xl shadow-xl hover:scale-105 active:scale-95 transition"/>
                </motion.div>
            </div>
            <div className="pt-5 lg:w-full">
                
            </div>
        </section>
    )
}
