import { Order } from "../interfaces/OrderInterface";
import axios from '../config/Api';

const requestGetOrders = async (): Promise<Order[] | null> => {
    try {
        const token = sessionStorage.getItem('token');
        const result = await axios.get('/order', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return result.data.data.orders;
    } catch (err) {
        return null;
    }
}

export { requestGetOrders }