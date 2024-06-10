import React from 'react';
import { ChevronUp, ChevronDown } from 'feather-icons-react'

export default function FAQ(){
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
                            <div className="border-2 rounded">
                                <button type="button" aria-label="Open item" title="Open item" className="flex items-center justify-between w-full p-4" onclick="toggleAccordion(this)">
                                    <p className="font-sans text-base text-justify">
                                        Apa saja yang dibutuhkan?
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <ChevronDown/>
                                    </div>
                                </button>
                                <div className="p-4 pt-0 hidden">
                                    <p className="font-sans text-base text-justify">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae
                                    </p>
                                </div>     
                            </div>
                            <div className="border-2 rounded">
                                <button type="button" aria-label="Open item" title="Open item" className="flex items-center justify-between w-full p-4" onclick="toggleAccordion(this)">
                                    <p className="font-sans text-base text-justify">
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <ChevronDown/>
                                    </div>
                                </button>
                                <div className="p-4 pt-0 hidden">
                                    <p className="font-sans text-base text-justify">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae
                                    </p>
                                </div>     
                            </div>
                            <div className="border-2 rounded">
                                <button type="button" aria-label="Open item" title="Open item" className="flex items-center justify-between w-full p-4" onclick="toggleAccordion(this)">
                                    <p className="font-sans text-base text-justify">
                                        Berapa hari sebelumnya sebaiknya booking sewa mobil?
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <ChevronDown/>
                                    </div>
                                </button>
                                <div className="p-4 pt-0 hidden">
                                    <p className="font-sans text-base text-justify">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae
                                    </p>
                                </div>     
                            </div>
                            <div className="border-2 rounded">
                                <button type="button" aria-label="Open item" title="Open item" className="flex items-center justify-between w-full p-4" onclick="toggleAccordion(this)">
                                    <p className="font-sans text-base text-justify">
                                        Apakah Ada biaya antar jemput?
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <ChevronDown/>
                                    </div>
                                </button>
                                <div className="p-4 pt-0 hidden">
                                    <p className="font-sans text-base text-justify">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae
                                    </p>
                                </div>     
                            </div>
                            <div className="border-2 rounded">
                                <button type="button" aria-label="Open item" title="Open item" className="flex items-center justify-between w-full p-4" onclick="toggleAccordion(this)">
                                    <p className="font-sans text-base text-justify">
                                        Bagaimana jika terjadi kecelakaan?
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <ChevronDown/>
                                    </div>
                                </button>
                                <div className="p-4 pt-0 hidden">
                                    <p className="font-sans text-base text-justify">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}