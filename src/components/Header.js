import React from 'react';
import { Menu, X } from 'feather-icons-react';

export default function Header() {
    return (
        <header className="bg-blue-50">
            <nav>
                <div className="relative px-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-8">
                    <div className="flex items-center justify-between">
                        <div className="w-24 h-8 bg-blue-800"></div>
                        <ul className="space-x-8 items-center hidden lg:flex">
                            <li>
                                <a href="#OurServices" className="font-medium font-sans hover:text-gray-700">
                                Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#WhyUs" className="font-medium font-sans hover:text-gray-700">
                                Why Us
                                </a>
                            </li>
                            <li>
                                <a href="#Testimonial" className="font-medium font-sans hover:text-gray-700">
                                Testimonial
                                </a>
                            </li>
                            <li>
                                <a href="#FAQ" className="font-medium font-sans hover:text-gray-700">
                                FAQ
                                </a>
                            </li>
                            <li>
                                <a href="/" className="inline-flex items-center justify-center h-10 px-5 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
                                Register
                                </a>
                            </li>
                        </ul>
                        <div className="lg:hidden">
                        <button id="openMenu" aria-label="Open Menu" title="Open Menu">
                            <Menu/>
                        </button>     
                        </div>
                    </div>
                </div>
                <div id="sideMenu" className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 hidden">
                    <div className="flex justify-end h-full">
                        <div className="bg-white w-64 p-6">
                            <div className="flex py-4 item-center justify-between">
                                <p className="font-bold font-sans text-lg">
                                    BCR
                                </p>
                                <button id="closeMenu" aria-label="Close Menu" title="Close Menu">
                                    {X}
                                </button>
                            </div>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#OurServices" className="font-medium font-sans hover:text-gray-700">
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#WhyUs" className="font-medium font-sans hover:text-gray-700">
                                        Why Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#Testimonial" className="font-medium font-sans hover:text-gray-700">
                                        Testimonial
                                    </a>
                                </li>
                                <li>
                                    <a href="#FAQ" className="font-medium font-sans hover:text-gray-700">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="inline-flex items-center justify-center h-10 px-5 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className="relative px-8 py-12 mt-12 mb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                    <h2 className="mb-6 font-sans font-bold text-4xl leading-normal">
                        Sewa & Rental Mobil Terbaik di kawasan Sleman
                    </h2>
                    <p className="mb-6 text-base text-justify font-sans">
                        Selamat datang di Binar Car Rental. 
                        Kami menyediakan mobil berkualitas terbaik dengan jarga terjagkau. 
                        Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <a href="/cars" className="inline-flex items-center justify-center h-10 px-5 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
                        Mulai Sewa Mobil
                    </a>
                </div>
                <div className="flex justify-center lg:absolute bottom-0 right-0">
                    <img src="./images/img_car.png" className="object-cover object-top w-full max-w-xl lg:h-auto lg:max-w-screen-sm" alt="Car"/>
                </div>
            </div>
        </header>
    )
}