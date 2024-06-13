import React from 'react';
import Accordion from './Accordion';

const FAQ: React.FC = () => {
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
                                <Accordion
                                    index={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;