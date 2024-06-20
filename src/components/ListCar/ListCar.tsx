import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'react-feather';

const ListCar: React.FC = () => {
    return (
        <>
            <div className="flex mb-4 md:mb-6">
                <h2 className="max-w-md font-sans text-xl font-bold text-gray-800 sm:text-2xl">
                    Cars
                </h2>
            </div>
            <div className="flex flex-row mb-6 md:mb-8 justify-between">
                <div className="flex">
                    <span className="bg-blue-700 px-1 rounded"></span>
                        <h2 className="ml-1 mt-1 font-sans font-bold text-base text-gray-800 sm:text-lg">
                            List Cars
                        </h2>
                    </div>
                    <div className="flex">
                    <Link
                        to={'/new-car'}
                        className="inline-flex items-center justify-center w-full h-8 sm:h-10 px-3 sm:px-4 font-medium rounded-md text-xs sm:text-sm text-white bg-blue-700 hover:bg-blue-600"
                    >
                        <Plus 
                            size={18} 
                            strokeWidth={3}
                            className='mr-1'
                        />
                        Add New Car
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ListCar;