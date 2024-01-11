"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Experience() {
    const {ref, inView} = useInView({threshold:0.2});
    const { activeSection, setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection("Experience");
        }
        console.log(activeSection);
    }, [inView, setActiveSection]);
    
    return (
        <section id="experience" className="mt-8" ref={ref}>
            <SectionHeading children={"Experience"} />
            <VerticalTimeline lineColor={"#F6F6F7"} animate={true}>
                {experiencesData.map((item, index) => (
                    <VerticalTimelineElement 
                        key={index} 
                        visible={inView}
                        contentStyle={{
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.2rem 1.5rem",
                            borderRadius: "0.5rem",
                        }}
                        contentArrowStyle={{
                            borderRight:
                            "0.4rem solid #9ca3af",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: "white",
                        }}
                        dateClassName={"date-right-align"}>
                        <div className="flex">
                            <Image src={item.companyLogo} alt={item.company} width={0} height={0} sizes="100vw" className="w-[50px] h-full mr-3" />
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="font-normal !mt-2 !text-md">{item.company}</p>
                                {item.description && <p className="!mt-1 !font-normal text-gray-700 !text-sm">{item.description}</p>}
                                <div className="skills-container flex justify-start mt-3 mb-2">
                                {Object.entries(item.skills).map(([skillName, skillLogo], skillIndex) => (
                                    <div className="group skill mr-4 sm:mr-5 relative inline-block hover:transform-gpu hover:scale-110" key={skillIndex}>
                                        <Image src={skillLogo} alt={skillName} width={0} height={0} sizes="100vw" className="w-full h-[25px] sm:h-[30px]" />
                                        <span className="skillName absolute text-[0.65rem] sm:text-xs font-mono opacity-0 group-hover:opacity-100" style={{ left: '50%', transform: 'translate(-50%, 0%)'}}>{skillName}</span>
                                    </div>))}
                                </div>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    )
}
