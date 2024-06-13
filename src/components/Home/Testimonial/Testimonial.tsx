import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'react-feather'
import Card from './Card'

const Testimonial: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const testimonials: { imgSrc: string; review: string; name: string; location:string }[] = [
        {
            imgSrc: "images/img_photo.png",
            review: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            name: "John Dee",
            location: "Bromo"
        },
        {
            imgSrc: "images/img_photo(1).png",
            review: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            name: "Felicia",
            location: "Dieng"
        },
        {
            imgSrc: "images/img_photo(2).jpg",
            review: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet”",
            name: "Unknown",
            location: "Zimbabwe"
        }
    ];

    const nextItem = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    }

    const prevItem = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    }

    return (
        <section id="Testimonial">
            <div className="relative px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-16">
                <div className="mb-8 lg:mb-12 text-center">
                    <h2 className="mb-6 font-sans font-bold text-3xl leading-normal">
                        Testimonial
                    </h2>
                    <p className="text-base font-sans">
                        Berbagai review positif dari para pelanggan kami
                    </p>
                </div>
                <div className="grid grid-cols-1">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            index={index}
                            imgSrc={testimonial.imgSrc}
                            review={testimonial.review}
                            name={testimonial.name}
                            location={testimonial.location}
                            currentIndex={currentIndex}
                        />
                    ))}
               </div>
                <div className="flex justify-center mt-8">
                    <button onClick={prevItem} className="p-1 w-9 h-9 border rounded-full mr-2 hover:text-white hover:bg-green-500">
                        <ChevronLeft/>
                    </button>
                    <button onClick={nextItem} className="p-1 w-9 h-9 border rounded-full ml-2 hover:text-white hover:bg-green-500">
                        <ChevronRight/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;