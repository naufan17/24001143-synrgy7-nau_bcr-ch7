import React, { useEffect, useState } from 'react';
import axios from '../../config/Api';
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom';
import { Edit } from 'react-feather';

interface Car {
    manufacture: string;
    model: string;
    type: string;
}

interface User {
    name: string;
    email: string;
    address: string;
    phone_number: string;
}

interface Order {
    id: string;
    durations: number;
    rent_start: string;
    rent_end: string;
    total_price: number;
    status: string;
    created_at: string;
    updated_at: string;
    car: Car;
    user: User;
}

const TableOrder: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const tableHeader = [
        'No',
        'Car',
        'Name',
        'Rent Start',
        'Rent End',
        'Status',
        'Action'
    ]

    const getOrders = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const result = await axios.get('order', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setOrders(result.data.data.orders)
            setLoading(false);
        } catch (err) {
            console.error(err)
        }
    }

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleString();
    };

    useEffect(() => {
        getOrders();
    }, []);

    if (loading) {
        return <Loading/>
    }
    
    return (
        <table className="w-full">
            <thead>
                <tr>
                    {tableHeader.map((header, index) => (
                        <th key={index} className="px-2 sm:px-3 py-2 sm:py-3 bg-blue-100 font-medium font-sans text-left text-sm sm:text-base text-gray-800">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
                {orders.map((order, index) => (
                    <tr key={order.id}>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 font-normal font-sans text-sm sm:text-base text-gray-800">
                            {index+1}
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 font-normal font-sans text-sm sm:text-base text-gray-800">
                            {order.car.manufacture} / {order.car.model}
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 font-normal font-sans text-sm sm:text-base text-gray-800">
                            {order.user.name}
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 font-normal font-sans text-sm sm:text-base text-gray-800">
                            {formatDate(order.rent_start)}
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 font-normal font-sans text-sm sm:text-base text-gray-800">
                            {formatDate(order.rent_end)}
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 font-normal font-sans text-sm sm:text-base text-gray-800">
                            {order.status}
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3">
                            <Link 
                                to={'/edit-order'}
                                className="inline-flex font-normal font-sans text-sm sm:text-base text-green-600"
                            >
                                <Edit
                                    size={18}
                                    className='mr-1'
                                />
                                Edit
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table> 
    );
}

export default TableOrder;