import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({children} : SectionHeadingProps) {
    return (
        <div className="mb-[14px] flex items-center justify-between sm:mb-[20px]">
            <h2 className="text-2xl font-medium pr-6 md:text-3xl">
                {children}
            </h2>
            <div className="flex-grow border-t-[1.5px] border-gray-600" />
        </div>
    )
}
