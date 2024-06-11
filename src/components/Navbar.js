import React, { useState } from 'react';
import { Menu, X } from 'feather-icons-react';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { to: "OurServices", text: "Our Services" },
        { to: "WhyUs", text: "Why Us" },
        { to: "Testimonial", text: "Testimonial" },
        { to: "FAQ", text: "FAQ" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="bg-blue-50">
            <div className="relative px-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-8">
                <div className="flex items-center justify-between">
                    <div className="w-24 h-8 bg-blue-800"></div>
                    <ul className="space-x-8 items-center hidden lg:flex">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className='cursor-pointer font-medium font-sans hover:text-gray-700'
                                >
                                    {link.text}
                                </Link>
                            </li>                        
                        ))}
                        <li>
                            <a href="/" className="inline-flex items-center justify-center h-10 px-5 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
                                Register
                            </a>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} aria-label="Open Menu" title="Open Menu">
                            <Menu/>
                        </button>     
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50">
                    <div className="flex justify-end h-full">
                        <div className="bg-white w-64 p-6">
                            <div className="flex py-4 item-center justify-between">
                                <p className="font-bold font-sans text-lg">
                                    BCR
                                </p>
                                <button onClick={toggleMenu} aria-label="Close Menu" title="Close Menu">
                                    <X/>
                                </button>
                            </div>
                            <ul className="space-y-4">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            className='cursor-pointer font-medium font-sans hover:text-gray-700'
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <a href="/" className="inline-flex items-center justify-center h-10 px-5 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}