"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { techStackData } from '@/lib/data';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    })
    return (
        <motion.section ref={ref} className="mt-14 sm:mt-18 mb-6 text-center"
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.25}}>
            <p className="text-gray-600/80 text-sm md:text-[16px]">This website is built with</p>
            <div className="techstack-container mt-2 flex justify-center">
            {techStackData.map((techStack, index) => (
                <TechStack {...techStack} key={index} />
            ))}
            </div>
        </motion.section>
    )
}

type TechStackProps = (typeof techStackData)[number];

function TechStack({name, icon} : TechStackProps) {
    return (
        <div className="group skill mx-4 relative hover:transform-gpu hover:scale-110" key={name}>
            <Image src={icon} alt={name} width={0} height={0} sizes="100vw" className="w-full opacity-70 group-hover:opacity-100 h-[25px] sm:h-[30px]" />
            <span className="skillName absolute text-[0.65rem] sm:text-xs font-mono opacity-0 group-hover:opacity-100" style={{ left: '50%', transform: 'translate(-50%, 0%)'}}>{name}</span>
        </div>
    )
}