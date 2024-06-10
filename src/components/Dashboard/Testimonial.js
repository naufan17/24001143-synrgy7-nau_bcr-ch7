import React from 'react';
import { ChevronRight, ChevronLeft } from 'feather-icons-react'

export default function Testimonial(){
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
                    <div className="testimonial-item p-8 w-auto h-80 sm:h-64 md:h-56 lg:h-64 sm:max-w-full md:w-3/4 lg:w-1/2 rounded-lg bg-blue-50 shadow-sm lg:p-12 justify-self-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center">
                            <div className="sm:mr-6">
                                <div className="flex w-16 h-16 mb-4">
                                    <img src="images/img_photo.png" className="rounded-full" alt="Profile"/>
                                </div>  
                            </div>
                            <div>
                                <div className="flex w-4 h-4 mb-2">
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                </div>                  
                                <p className="mx-auto mb-2 font-sans text-base text-justify">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”          
                                </p>
                                <p className="mx-auto font-semibold font-sans text-base">
                                    John Dee 32, Bromo
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item p-8 w-auto h-80 sm:h-64 md:h-56 lg:h-64 sm:max-w-full md:w-3/4 lg:w-1/2 rounded-lg bg-blue-50 shadow-sm lg:p-12 justify-self-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center">
                            <div className="sm:mr-6">
                                <div className="flex w-16 h-16 mb-4">
                                    <img src="images/img_photo(1).png" className="rounded-full" alt="Profile"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex w-4 h-4 mb-2">
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                </div>                  
                                <p className="mx-auto mb-2 font-sans text-base text-justify">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod”          
                                </p>
                                <p className="mx-auto font-semibold font-sans text-base">
                                    Felicia, Dieng
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item p-8 w-auto h-80 sm:h-64 md:h-56 lg:h-64 sm:max-w-full md:w-3/4 lg:w-1/2 rounded-lg bg-blue-50 shadow-sm lg:p-12 justify-self-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center">
                            <div className="sm:mr-6">
                                <div className="flex w-16 h-16 mb-4">
                                    <img src="images/img_photo(2).jpg" className="rounded-full" alt="Profile"/>
                                </div>
                            </div>
                            <div>
                                <div className="flex w-4 h-4 mb-2">
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                    <img src="images/star.png" alt="Star"/>
                                </div>                  
                                <p className="mx-auto mb-2 font-sans text-base text-justify">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet”          
                                </p>
                                <p className="mx-auto font-semibold font-sans text-base">
                                    Unknown, Zimbawe
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button id="prevButton" className="p-1 w-9 h-9 border rounded-full mr-2 hover:text-white hover:bg-green-500">
                        <ChevronLeft/>
                    </button>
                    <button id="nextButton" className="p-1 w-9 h-9 border rounded-full ml-2 hover:text-white hover:bg-green-500">
                        <ChevronRight/>
                    </button>
                </div>
            </div>
        </section>
    )
}