import React from 'react';
import { Home, Truck } from 'react-feather';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <nav className="fixed bg-blue-800 w-16 sm:w-20 left-0 top-0 h-full">
            <div className="flex flex-col">
                <ul className="mt-16 sm:mt-20">
                    <li>
                        <Link
                            to={'/dashboard'}
                            className="flex flex-col items-center justify-center h-16 sm:h-20 w-16 sm:w-20 font-sans font-medium text-white text-xs hover:bg-blue-700"
                        >
                            <Home className='mb-1'/>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/list-cars'}
                            className="flex flex-col items-center justify-center h-16 sm:h-20 w-16 sm:w-20 font-sans font-medium text-white text-xs hover:bg-blue-700"
                        >
                            <Truck className='mb-1'/>
                            <span>Cars</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar;