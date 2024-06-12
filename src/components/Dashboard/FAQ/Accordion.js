import React, { useState } from 'react';
import { ChevronDown } from 'feather-icons-react'

export default function Accordion({ index, question, answer }){
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleAccordion = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        <div key={index} className="border-2 rounded">
            <button 
                type="button" 
                aria-label="Open item" 
                title="Open item"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-4"
            >
                <p className="font-sans text-base text-justify">
                    {question}
                </p>
                <div className={`flex items-center justify-center transition-transform duration-200 ${openIndexes.includes(index) ? 'rotate-180' : ''}`}>
                    <ChevronDown/>
                </div>
            </button>
            <div className={`p-4 pt-0 ${openIndexes.includes(index) ? '': 'hidden'}`}>
                <p className="font-sans text-base text-justify">
                    {answer}
                </p>
            </div>     
        </div>
    )
}