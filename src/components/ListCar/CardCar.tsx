import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/Api';
import Loading from '../Loading/Loading';
import { Users, Settings, Calendar, Trash, Edit, DollarSign, X } from 'react-feather';

interface Deleted {
    deleted_at?: string;
}

interface Car {
    id: string;
    manufacture: string;
    model: string;
    image: string;
    capacity: number;
    transmission: string;
    type: string;
    year: number;
    rent_price: number;
    delete: Deleted;
}

const CardCar: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getCars = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const result = await axios.get('/car', {
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
        return <Loading/>
    }
    
    return (
        <div className="grid gap-4 md:gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
            {cars.map(car => (
                <div key={car.id} className="relative px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
                    {car.delete.deleted_at && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 bg-opacity-50 text-red-700 font-bold hover:bg-opacity-75 duration-200">
                            <div className="flex flex-col justify-center items-center">
                                <X size={40}/>
                                Deleted
                            </div>
                        </div>
                    )}
                    <div className="flex items-center justify-center mb-6">
                        <img src={car.image} className="object-cover object-top md:h-80 md:w-auto" alt="Car"/>
                    </div>
                    <p className="mb-3 font-sans text-sm sm:text-base font-bold">
                        {car.manufacture} / {car.model} / {car.type}
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
                        <li className="flex text-sm sm:text-base font-sans">
                            <span className="mr-4">
                                <DollarSign size="20"/>
                            </span>
                            {car.rent_price} / hari
                        </li>
                    </ul>
                    <div className="flex items-center justify-between mt-6 space-x-2">
                        <Link
                            to={`/delete-car/${car.id}`}
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
                            to={`/edit-car/${car.id}`}
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