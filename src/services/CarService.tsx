import { CarDetail, Car } from '../interfaces/CarInterface'
import axios from '../config/Api';

const getCarsServiceDetail = async (): Promise<CarDetail[] | null> => {
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

const getCarsService = async (): Promise<Car[] | null> => {
        try {
            const result = await axios.get('/car');
            return result.data.data.cars;
        } catch (err) {
            return null
        }
}

const deleteCarService = async (id: string): Promise<boolean> => {
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

export { getCarsServiceDetail, getCarsService, deleteCarService }