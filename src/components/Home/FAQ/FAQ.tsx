import React, { useState } from 'react';
import { ChevronDown } from 'react-feather'

const FAQ: React.FC = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const faqs: { question: string; answer: string}[] = [
        {
            question: 'Apa saja yang dibutuhkan?',
            answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae'
        },
        {
            question: 'Berapa hari minimal sewa mobil lepas kunci?',
            answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae'
        },
        {
            question: 'Berapa hari sebelumnya sebaiknya booking sewa mobil?',
            answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae'
        },
        {
            question: 'Apakah Ada biaya antar jemput?',
            answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae'
        },
        {
            question: 'Bagaimana jika terjadi kecelakaan?',
            answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae'
        }
    ];

    const toggleAccordion = (index: number) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        <section id="FAQ">
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="grid gap-0 lg:gap-12 row-gap-12 grid-cols-1 lg:grid-cols-5">
                    <div className="flex flex-col col-span-2">
                        <div className="mb-8 lg:mb-12">
                            <h2 className="mb-6 font-sans text-center lg:text-left font-bold text-3xl leading-normal">
                                Frequently Asked Question
                            </h2>
                            <p className="text-base font-sans text-center lg:text-left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-3 justify-center">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-2 rounded">
                                    <button 
                                        type="button" 
                                        aria-label="Open item" 
                                        title="Open item"
                                        onClick={() => toggleAccordion(index)}
                                        className="flex items-center justify-between w-full p-4"
                                    >
                                        <p className="font-sans text-base text-justify">
                                            {faq.question}
                                        </p>
                                        <div className={`flex items-center justify-center transition-transform duration-200 ${openIndexes.includes(index) ? 'rotate-180' : ''}`}>
                                            <ChevronDown/>
                                        </div>
                                    </button>
                                    <div className={`p-4 pt-0 ${openIndexes.includes(index) ? '': 'hidden'}`}>
                                        <p className="font-sans text-base text-justify">
                                            {faq.answer}
                                        </p>
                                    </div>     
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;