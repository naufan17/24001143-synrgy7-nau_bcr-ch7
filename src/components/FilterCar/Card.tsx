import React from 'react';
import { Users, Settings, Calendar } from 'react-feather'

interface CarProps {
    id: string;
    image: string;
    manufacture: string;
    type: string;
    rentPerDay: number;
    description: string;
    capacity: number;
    transmission: string;
    year: number;
}

const Card: React.FC<CarProps> = ({ id, image, manufacture, type, rentPerDay, description, capacity, transmission, year }) => {
    return (
        <div key={id} className="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
            <div className="flex items-center justify-center mb-6">
                <img src={image} className="object-cover object-top md:h-80 md:w-auto" alt="Car"/>
            </div>
            <p className="mb-3 font-sans text-base text-justify">
                {manufacture} / {type}
            </p>
            <h3 className="mb-3 text-base font-bold font-sans">
                RP {rentPerDay} / hari
            </h3>
            <p className="mb-3 font-sans text-base text-justify">
                {description}
            </p>
            <ul className="space-y-3">
                <li className="flex text-base font-sans">
                    <span className="mr-4">
                        <Users size="20"/>
                    </span>
                    {capacity} orang
                </li>
                <li className="flex text-base font-sans">
                    <span className="mr-4">
                        <Settings size="20"/>
                    </span> 
                    {transmission}
                </li>
                <li className="flex text-base font-sans">
                    <span className="mr-4">
                        <Calendar size="20"/>
                    </span>
                    {year}
                </li>
            </ul>
            <div className="flex items-center justify-center mt-6">
                <a href="/" className="inline-flex items-center justify-center h-12 px-16 sm:px-28 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
                    Pilih Mobil
                </a>  
            </div>
        </div>
    )
}

export default Card;