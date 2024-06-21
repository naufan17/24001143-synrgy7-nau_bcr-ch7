import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "../../config/Api";

const FormCar: React.FC = () => {
    const [plate, setPlate] = useState<string>('');
    const [manufacture, setManufacture] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<File | null>(null);
    const [capacity, setCapacity] = useState<number | undefined>(undefined);
    const [transmission, setTransmission] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [year, setYear] = useState<number | undefined>(undefined);
    const [rentPrice, setRentPrice] = useState<number | undefined>(undefined);
    const [description, setDescription] = useState<string>('');

    const createCar = async () => {
        try {
            const token = sessionStorage.getItem('token');
            await axios.post('car', {
                plate,
                manufacture,
                model,
                image: imageUrl,
                capacity,
                transmission,
                type,
                year,
                rentPrice,
                description,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch(e) {
            console.log(e);
        }
    }

    const uploadImageCar = async () => {
        if (!image) return;
        
        try {
            const token = sessionStorage.getItem('token');
            const result = await axios.post('car/image', {
                image,
                headers: {
                    Authorization: `Bearer ${token}`,
                    ContentType: 'multipart/from-data'
                }
            });
            setImageUrl(result.data.url)
        } catch(e) {
            console.log(e);
        }
    }

    const handlePlateChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setPlate(e.target.value);
    }

    const handleManufactureChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setManufacture(e.target.value);
    }

    const handleModelChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setModel(e.target.value);
    }

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

    const handleCapacityChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setCapacity(parseInt(e.target.value));
    }

    const handleTransmissionChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setTransmission(e.target.value);
    }

    const handleTypeChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    }

    const handleYearChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setYear(parseInt(e.target.value));
    }

    const handleRentPriceChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setRentPrice(parseInt(e.target.value));
    }

    const handleDescriptionChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const handleCancel = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setPlate('');
        setManufacture('');
        setModel('');
        setImage(null)
        setCapacity(0);
        setTransmission('');
        setType('');
        setYear(0);
        setRentPrice(0);
        setDescription('');
    }

    const handleSave = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await uploadImageCar();
        createCar();
    }

    return(
        <div className="bg-blue-50 rounded-lg px-6 py-6 lg:px-12 lg:py-12">
            <form onSubmit={handleSave}>
                <div className="grid grid-cols-3 space-y-4 w-full md:max-w-screen-md">
                    <div className="flex items-center">
                        <label 
                            htmlFor="image"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Image 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="file" 
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                            className="flex col-span-2 w-full text-sm sm:text-base font-medium
                                        file:cursor-pointer file:h-10 file:px-4 file:mr-4 file:bg-blue-200 file:hover:bg-blue-300 file:text-blue-800 file:border-0 file:rounded-full"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="plate"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Plate 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="text" 
                            id="plate"
                            name="plate"
                            value={plate}
                            onChange={handlePlateChange}
                            className="flex col-span-2 w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="manufacture"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Manufacture 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="text" 
                            id="manufacture"
                            name="manufacture"
                            value={manufacture}
                            onChange={handleManufactureChange}
                            className="flex col-span-2 w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="model"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Model 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="text" 
                            id="model"
                            name="model"
                            value={model}
                            onChange={handleModelChange}
                            className="flex col-span-2 w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="capacity"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Capacity 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="number" 
                            id="capacity"
                            name="capacity"
                            value={capacity}
                            onChange={handleCapacityChange}
                            className="flex col-span-2 w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="transmission"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Transmission 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="text" 
                            id="transmission"
                            name="transmission"
                            value={transmission}
                            onChange={handleTransmissionChange}
                            className="flex col-span-2 w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="type"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                        Type 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="text" 
                            id="type"
                            name="type"
                            value={type}
                            onChange={handleTypeChange}
                            className="flex col-span-2 w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="year"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Year 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="number" 
                            id="year"
                            name="year"
                            value={year}
                            onChange={handleYearChange}
                            className="flex col-span-2 w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="rentPrice"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Rent Price 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <input 
                            type="number" 
                            id="rentPrice"
                            name="rentPrice"
                            value={rentPrice}
                            onChange={handleRentPriceChange}
                            className="flex col-span-2 w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            // required
                        />
                    </div>
                    <div className="flex items-center">
                        <label 
                            htmlFor="description"
                            className="flex text-sm md:text-base font-medium text-gray-800"
                        >
                            Description 
                        </label>
                    </div>
                    <div className="flex col-span-2 items-center justify-center">
                        <textarea 
                            id="description"
                            name="description"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="flex col-span-2 w-full h-20 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                        >
                        </textarea>
                    </div>
                </div>
                <div className="flex mt-12 justify-end w-full md:max-w-screen-md">
                    <button 
                        id="cancel-btn"
                        type="button" 
                        onClick={handleCancel}
                        className="inline-flex items-center justify-center h-10 px-6 font-semibold font-sans text-blue-700 rounded border-2 border-blue-700 bg-white hover:bg-blue-200"
                    >
                        Cancel
                    </button>
                    <button 
                        id="save-btn"
                        type="submit"
                        className="inline-flex items-center justify-center ml-4 h-10 px-6 font-semibold font-sans text-white rounded bg-blue-700 hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormCar;