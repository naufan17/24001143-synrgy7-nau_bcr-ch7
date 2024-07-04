import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Settings, Calendar, Trash, Edit, DollarSign, X } from 'react-feather';
import { requestGetCarsDetail, requestDeleteCar } from '../../api/CarApi';
import { CarDetail } from '../../interfaces/CarInterface'
import Loading from '../Common/Loading/Loading';
import Modal from '../Common/Modal/Modal';
import Alert from '../Common/Alert/Alert';

const CardCar: React.FC = () => {
    const [cars, setCars] = useState<CarDetail[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [idCar, setIdCar] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);

    const getCars = async () => {
        const result = await requestGetCarsDetail();

        if (result !== null) {
            setCars(result);
            setLoading(false);
        }
    }

    const deleteCar = async (id: string) => {
        const result = await requestDeleteCar(id);

        if (result) {
            getCars();
        }
    }

    const handleDeleteCar = (id: string) => {
        setModal(true);
        setIdCar(id);
    }

    const handleConfirmDelete = () => {
        if (idCar) {
            deleteCar(idCar);
        }
        setAlert(true)
        setModal(false);
    }

    useEffect(() => {
        getCars();
    }, []);

    if (loading) {
        return <Loading/>
    }
    
    return (
        <>
            { alert &&
                <Alert
                    status={true}
                    message={"Mobil berhasil terhapus"}
                    onClose={() => setAlert(false)}
                />
            }
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
                            <button
                                onClick={() => handleDeleteCar(car.id)} 
                                className="inline-flex items-center justify-center h-10 w-full mx-auto font-semibold font-sans text-red-500 rounded bg-white border border-red-500 hover:bg-red-200"
                            >
                                <Trash 
                                    size={16}
                                    strokeWidth={3}
                                    className='mr-1'
                                />
                                Delete
                            </button>
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
                <Modal
                    show={modal}
                    onClose={() => setModal(false)}
                    onConfirm={handleConfirmDelete}
                    title="Menghapus Data Mobil"
                    message="Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?"
                />
            </div>
        </>
    );
}

export default CardCar;