import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/Api';
import Loading from '../Loading/Loading';
import { Users, Settings, Calendar, Trash, Edit } from 'react-feather';

interface Car {
    id: string;
    plate: string;
    manufacture: string;
    model: string;
    image: string;
    capacity: number;
    description: string;
    transmission: string;
    type: string;
    year: number;
    available: boolean;
    rent_price: number;
    options: string[];
    specs: string[];
}

const CardCar: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getCars = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const result = await axios.get('car', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCars(result.data.data.cars)
            setLoading(false);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getCars();
    }, []);

    if (loading) {
        return (
            <Loading/>
        )
    }
    
    return (
        <div className="grid gap-4 md:gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
            {cars.map(car => (
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
                    <div className="flex items-center justify-between mt-6 space-x-2">
                        <Link
                            to={'/delete-car'}
                            className="inline-flex items-center justify-center h-10 w-full mx-auto font-semibold font-sans text-red-500 rounded bg-white border border-red-500 hover:bg-red-200"
                        >
                            <Trash 
                                size={16}
                                strokeWidth={3}
                                className='mr-1'
                            />
                            Delete
                        </Link>
                        <Link
                            to={'/edit-car'}
                            className="inline-flex items-center justify-center h-10 w-full mx-auto font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600"
                        >
                            <Edit
                                size={16}
                                strokeWidth={3}
                                className='mr-1'
                            />
                            Edit
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardCar;