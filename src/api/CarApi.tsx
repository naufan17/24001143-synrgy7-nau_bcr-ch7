import { CarDetail, Car } from '../interfaces/CarInterface'
import axios from '../config/Api';

const requestGetCarsDetail = async (): Promise<CarDetail[] | null> => {
    try {
        const token = sessionStorage.getItem('token');
        const result = await axios.get('/car', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return result.data.data.cars;
    } catch (err) {
        return null;
    }
}

const requestGetCars = async (): Promise<Car[] | null> => {
        try {
            const result = await axios.get('/car');
            return result.data.data.cars;
        } catch (err) {
            return null
        }
}

const requestFindCar = async (id: string | undefined): Promise<Car | null> => {
    try {
        const token = sessionStorage.getItem('token');
        const result = await axios.get(`/car/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return result.data.data;
    } catch(e) {
        return null;
    }
}

const requestCreateCar = async (
    plate: string,
    manufacture: string,
    model: string,
    imageUrl: string,
    capacity: number | string,
    transmission: string,
    type: string,
    year: number | string,
    rentPrice: number | string,
    description: string
): Promise<boolean> => {
    try {
        const token = sessionStorage.getItem('token');
        await axios.post('/car', {
            plate,
            manufacture,
            model,
            image: imageUrl,
            capacity,
            transmission,
            type,
            year,
            rent_price: rentPrice,
            description
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true;
    } catch(e) {
        return false;
    }
}

const requestUpdateCar = async (
    id: string | undefined,
    plate: string,
    manufacture: string,
    model: string,
    imageUrl: string,
    capacity: number | string,
    transmission: string,
    type: string,
    year: number | string,
    rentPrice: number | string,
    description: string
): Promise<boolean> => {
    try {
        const token = sessionStorage.getItem('token');
        await axios.put(`/car/${id}`, {
            plate,
            manufacture,
            model,
            image: imageUrl,
            capacity,
            transmission,
            type,
            year,
            rent_price: rentPrice,
            description
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true;
    } catch(e) {
        return false;
    }
}

const requestDeleteCar = async (id: string): Promise<boolean> => {
    try {
        const token = sessionStorage.getItem('token');
        await axios.delete(`/car/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true;
    } catch (err) {
        return false;
    }
}

export { 
    requestGetCarsDetail, 
    requestGetCars, 
    requestFindCar, 
    requestCreateCar, 
    requestUpdateCar, 
    requestDeleteCar 
}