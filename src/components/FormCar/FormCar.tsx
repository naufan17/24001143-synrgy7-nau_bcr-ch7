import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "../../config/Api";

const FormCar: React.FC = () => {
    const [plate, setPlate] = useState<string>('');
    const [manufacture, setManufacture] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');
    const [capacity, setCapacity] = useState<number | undefined>(undefined);
    const [transmission, setTransmission] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [year, setYear] = useState<number | undefined>(undefined);
    const [rentPrice, setRentPrice] = useState<number | undefined>(undefined);
    const [description, setDescription] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const createCar = async () => {
        try {
            // const token = sessionStorage.getItem('token');
            // await axios.post('car', {
            //     plate,
            //     manufacture,
            //     model,
            //     image: imageUrl,
            //     capacity,
            //     transmission,
            //     type,
            //     year,
            //     rent_price: rentPrice,
            //     description
            // }, {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // });
            // navigate('/list-cars')
        } catch(e) {
            console.log(e);
        }
    }

    const uploadImageCar = async () => {
        if (!image) return;
        
        try {
            const token = sessionStorage.getItem('token');
            const result = await axios.post('car/image', {
                image
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Error to save url link
            setImageUrl(result.data.data.url);
            console.log(imageUrl);
        } catch(e) {
            console.log(e);
        }
    }

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
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
        setLoading(false);
    }

    const handleSave = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        await uploadImageCar();
        await createCar();
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
                            className="flex w-full text-sm sm:text-base font-medium
                                        file:cursor-pointer file:h-10 file:px-4 file:mr-4 file:bg-blue-200 file:hover:bg-blue-300 file:text-blue-800 file:border-0 file:rounded-full"
                            required
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
                            className="flex w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                            className="flex w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                            className="flex w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                            className="flex w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                            className="flex w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                            className="flex w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                            className="flex w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                            className="flex w-full h-10 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                            className="flex w-full h-20 px-2 text-sm sm:text-base border-2 rounded-md focus:outline-none focus:border-slate-300"
                            required
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
                        {loading ? (
                            <svg className="inline w-7 h-7 text-slate-200 animate-spin dark:text-slate-300 fill-slate-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        ):(
                            <>                                
                                Save
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormCar;