import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Car from './Car'

export default function Search(){
    const [cars, setCars] = useState([])

    const getCars = async () => {
        try {
            const result = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
            setCars(result.data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getCars();
    }, []);

    return (
        <section id="Search">
            <div className="relative px-8 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-6">
                <div className="flex rounded-lg shadow-lg">
                    <div className="grid grid-cols-4 md:grid-cols-9">
                        <div className="inline-block col-span-2 p-5 md:p-6">
                            <label for="driver" className="inline-block font-sans mb-3">Tipe Driver</label>
                            <select 
                                name="driver" 
                                id="driver"
                                className="flex-grow w-full h-10 px-4 bg-white font-sans border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring-1 ring-green-500"
                            >
                                <option value="" disabled selected hidden>Pilih Driver</option>
                                <option value="true" className="hover:bg-green-300 hover:text-green-600">Dengan Sopir</option>
                                <option value="false" className="hover:bg-green-300 hover:text-green-600">Tanpa Sopir</option>  
                            </select>
                        </div>    
                        <div className="inline-block col-span-2 p-5 md:p-6">
                            <label for="date" className="inline-block font-sans mb-3">Tanggal</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                placeholder="Pilih Tanggal"
                                className="flex-grow w-full h-10 px-4 bg-white font-sans border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring-1 ring-green-500"
                            />
                        </div>    
                        <div className="inline-block col-span-2 p-5 md:p-6">
                            <label for="time" className="inline-block font-sans mb-3">Waktu Jemput/Ambil</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                placeholder="Pilih Waktu"
                                className="flex-grow w-full h-10 px-4 bg-white font-sans border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring-1 ring-green-500"
                            />
                        </div>    
                        <div className="inline-block col-span-2 p-5 md:p-6">
                            <label for="capacity" className="inline-block font-sans mb-3">Jumlah Penumpang</label>
                            <input
                                type="number"
                                id="capacity"
                                name="capacity"
                                placeholder="Jumlah Penumpang"
                                className="flex-grow w-full h-10 px-4 p-2 bg-white font-sans border border-gray-300 rounded focus:outline-none focus:border-green-500 focus:ring-1 ring-green-500"
                            />
                        </div>
                        <div className="inline-block col-span-2 md:col-span-1 p-5 md:p-6 md:mt-9">
                            <button 
                                id="submit-btn"
                                type="button" 
                                className="inline-flex items-center justify-center h-10 px-4 md:px-1 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600"
                                disabled
                            >
                               Cari Mobil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative px-8 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-12 lg:py-6">
                <div className="grid gap-4 md:gap-6 lg:grid-cols-3 md:grid-cols-2">
                    {cars.map(car =>
                        <Car
                            id = {car.id}
                            image = {car.image}
                            manufacture = {car.manufacture}
                            type = {car.type} 
                            rentPerDay = {car.rentPerDay}
                            description = {car.description}
                            capacity = {car.capacity}
                            transmission = {car.transmission}
                            year = {car.year}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}