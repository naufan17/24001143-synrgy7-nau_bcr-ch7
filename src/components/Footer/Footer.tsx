import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Twitch } from 'react-feather';

const Footer:React.FC = () => {
    const contactInfo: string[] = [
        "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000",
        "binarcarrental@gmail.com",
        "081-233-334-808"
    ];
    
    const footerLinks: {href: string; text: string}[] = [
        { href: "#OurServices", text: "Our Services" },
        { href: "#WhyUs", text: "Why Us" },
        { href: "#Testimonial", text: "Testimonial" },
        { href: "#FAQ", text: "FAQ" }
    ];
    
    const socialMedia: JSX.Element[] = [
        <Facebook color="white" className="mt-1 ml-1" />,
        <Instagram color="white" className="mt-1 ml-1" />,
        <Twitter color="white" className="mt-1 ml-1" />,
        <Mail color="white" className="mt-1 ml-1" />,
        <Twitch color="white" className="mt-1 ml-1" />
    ];

    return (
        <footer>
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-12 lg:py-16">
                <div className="grid gap-12 grid-cols-1 md:grid-cols-4 row-gap-12 lg:grid-cols-7">
                    <div className="md:col-span-2 col-span-1">
                        {contactInfo.map((info, index) => (
                            <p key={index} className="mb-2 lg:mb-4 text-base font-sans">
                                {info}
                            </p>
                        ))}
                    </div>
                    <div>
                        <ul className="space-y-4">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-base font-medium font-sans">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-2 col-span-1">
                        <p className="mb-2 lg:mb-4 text-base font-sans">
                            Connect with us
                        </p>
                        <div className="flex">
                            {socialMedia.map((social, index) => (
                                <div key={index} className="w-10 h-10 p-1 mr-4 rounded-full bg-blue-700">
                                    {social}
                                </div>
                            ))}
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

export default Footer;