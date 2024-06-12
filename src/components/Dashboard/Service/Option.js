import React from 'react';
import { Check } from 'feather-icons-react'

export default function Option({ index, service }) {
    return (
        <li key={index} className="flex text-base font-sans">
            <span className="mr-4 bg-blue-200 rounded-full p-1">
                <Check color="blue"/>
            </span>
            {service}
        </li>
    )
}