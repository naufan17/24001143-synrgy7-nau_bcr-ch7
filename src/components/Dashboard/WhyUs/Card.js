import React from 'react';

export default function WhyUs({ index, bgColor, icon, title, description }) {
    return (
        <div key={index} className="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
            <div className={`flex items-center justify-center w-10 h-10 mb-4 rounded-full ${bgColor}`}>
                {icon}
            </div>
            <h3 className="mb-3 text-lg sm:text-xl font-bold font-sans">
                {title}
            </h3>
            <p className="font-sans text-base text-justify">
                {description}
            </p>
        </div>
    )
}