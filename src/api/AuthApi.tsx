import { useAuth } from '../middleware/AuthProvider';
import axios from '../config/Api';

const auth = () => {
    const { login } = useAuth();

    const requestLoginAdmin = async (username: string, password: string): Promise<boolean> => {
        try {
            const result = await axios.post('/admin/login', { username, password });
            login(result.data.data.token);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    return { requestLoginAdmin };
};

const validateToken = async (token: string): Promise<boolean> => {
    try {
        const result = await axios.get('/validate-token', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        localStorage.setItem('admin', result.data.data.admin.username)
        return true
    } catch(e) {
        return false;
    }
}

export { auth, validateToken }