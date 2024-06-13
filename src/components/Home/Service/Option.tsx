import React from 'react';
import { Check } from 'react-feather'

interface ServiceProps {
    index: number;
    service: string;
}

const Option: React.FC<ServiceProps> = ({ index, service }) => {
    return (
        <li key={index} className="flex text-base font-sans">
            <span className="mr-4 bg-blue-200 rounded-full p-1">
                <Check color="blue"/>
            </span>
            {service}
        </li>
    )
}

export default Option