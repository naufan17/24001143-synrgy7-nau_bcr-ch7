import React from 'react';

export default function Footer(){
    return (
        <footer>
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-12 lg:py-16">
                <div className="grid gap-12 grid-cols-1 md:grid-cols-4 row-gap-12 lg:grid-cols-7">
                    <div className="md:col-span-2 col-span-1">
                        <p className="mb-2 lg:mb-4 text-base font-sans">
                            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                        </p>
                        <p className="mb-2 lg:mb-4 text-base font-sans">
                            binarcarrental@gmail.com
                        </p>
                        <p className="mb-2 lg:mb-4 text-base font-sans">
                            081-233-334-808
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-4">
                            <li>
                                <a href="#OurServices" className="text-base font-medium font-sans">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#WhyUs" className="text-base font-medium font-sans">
                                    Why Us
                                </a>
                            </li>
                            <li>
                                <a href="#Testimonial" className="text-base font-medium font-sans">
                                    Testimonial
                                </a>
                            </li>
                            <li>
                                <a href="#FAQ" className="text-base font-medium font-sans">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 col-span-1">
                        <p className="mb-2 lg:mb-4 text-base font-sans">
                            Connect with us
                        </p>
                        <div className="flex">
                            <div className="w-10 h-10 p-1 mr-4 rounded-full bg-blue-700">
                                <i data-feather="facebook" className="w-8 mt-1 text-white"></i>
                            </div>
                            <div className="w-10 h-10 p-1 mr-4 rounded-full bg-blue-700">
                                <i data-feather="instagram" className="w-8 mt-1 text-white"></i>
                            </div>
                            <div className="w-10 h-10 p-1 mr-4 rounded-full bg-blue-700">
                                <i data-feather="twitter" className="w-8 mt-1 text-white"></i>
                            </div>
                            <div className="w-10 h-10 p-1 mr-4 rounded-full bg-blue-700">
                                <i data-feather="mail" className="w-8 mt-1 text-white"></i>
                            </div>
                            <div className="w-10 h-10 p-1 mr-4 rounded-full bg-blue-700">
                                <i data-feather="twitch" className="w-8 mt-1 text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 col-span-1">
                        <p className="mb-2 lg:mb-4 text-base font-sans">
                            Copyright Binar 2022
                        </p>
                        <div className="w-24 h-8 bg-blue-800"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}