import React from 'react';
import { Users, Settings, Calendar } from 'react-feather';
import { Link } from 'react-router-dom';
import Loading from '../Common/Loading/Loading';

interface Car {
    id: string;
    image: string;
    manufacture: string;
    type: string;
    description: string;
    capacity: number;
    transmission: string;
    year: number;
    rent_price: number;
}

interface CarProps {
    cars: Car[];
    loading: boolean;
}

const ListCar: React.FC<CarProps> = ({ cars, loading }) => {
    if (loading) {
        return <Loading/>
    }

    if (cars.length === 0) {
        return(
            <div className="flex items-center justify-center mt-8 md:mt-12">
                <p className="text-base font-sans">Cars not found</p>
            </div>
        )        
    }

    return (
        <div className="grid gap-4 md:gap-6 lg:grid-cols-3 md:grid-cols-2 mt-8 md:mt-12">
            {cars.map(car =>
                <div key={car.id} className="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
                    <div className="flex items-center justify-center mb-6">
                        <img src={car.image} className="object-cover object-top md:h-80 md:w-auto" alt="Car"/>
                    </div>
                    <p className="mb-3 font-sans text-sm sm:text-base text-justify">
                        {car.manufacture} / {car.type}
                    </p>
                    <h3 className="mb-3 text-sm sm:text-base font-bold font-sans">
                        RP {car.rent_price} / hari
                    </h3>
                    <p className="mb-3 font-sans text-sm sm:text-base text-justify">
                        {car.description}
                    </p>
                    <ul className="space-y-3">
                        <li className="flex text-sm sm:text-base font-sans">
                            <span className="mr-4">
                                <Users size="20"/>
                            </span>
                            {car.capacity} orang
                        </li>
                        <li className="flex text-sm sm:text-base font-sans">
                            <span className="mr-4">
                                <Settings size="20"/>
                            </span> 
                            {car.transmission}
                        </li>
                        <li className="flex text-sm sm:text-base font-sans">
                            <span className="mr-4">
                                <Calendar size="20"/>
                            </span>
                            {car.year}
                        </li>
                    </ul>
                    <div className="flex items-center justify-center mt-6">
                        <Link
                            to={'/cars'}
                            className="inline-flex items-center justify-center h-10 w-full font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600"
                        >
                            Pilih Mobil
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListCar;