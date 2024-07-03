import React from "react";
import FormCar from "./FormCar";

const NewCar: React.FC = () => {
    return (
        <div className="px-4 py-4 ml-16 sm:ml-20 mx-auto lg:px-8 lg:py-8"> 
            <div className="flex mb-6 md:mb-8">
                <h2 className="max-w-md font-sans text-xl font-bold text-gray-800 sm:text-2xl">
                    Car
                </h2>
            </div>
            <div className="flex mb-4 md:mb-6">
                <span className="bg-blue-700 px-1 rounded"></span>
                <h2 className="ml-1 font-sans text-base font-bold text-gray-800 sm:text-lg">
                    Add Car
                </h2>
            </div>
            <FormCar/>
        </div>
    )
}

export default NewCar;