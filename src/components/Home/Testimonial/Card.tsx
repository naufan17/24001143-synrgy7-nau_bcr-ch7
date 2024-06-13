import React from 'react';

interface TestimonialProps {
    index: number;
    imgSrc: string;
    review: string;
    name: string;
    location: string;
    currentIndex: number;
}

const Card: React.FC<TestimonialProps> = ({ index, imgSrc, review, name, location, currentIndex }) => {
    return (
        <div key={index} className={`testimonial-item p-8 w-auto h-80 sm:h-64 md:h-56 lg:h-64 sm:max-w-full md:w-3/4 lg:w-1/2 rounded-lg bg-blue-50 shadow-sm lg:p-12 justify-self-center ${index === currentIndex ? '' : 'hidden'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center">
                <div className="sm:mr-6">
                    <div className="flex w-16 h-16 mb-4">
                        <img src={imgSrc} className="rounded-full" alt="Profile"/>
                    </div>  
                </div>
                <div>
                    <div className="flex w-4 h-4 mb-2">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                            <img key={starIndex} src="images/star.png" alt="Star"/>
                        ))}
                    </div>                  
                    <p className="mx-auto mb-2 font-sans text-base text-justify">
                        {review}
                    </p>
                    <p className="mx-auto font-semibold font-sans text-base">
                        {name}, {location}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;