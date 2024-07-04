import { useAuth } from '../middleware/AuthProvider';
import axios from '../config/Api';

const authService = () => {
    const { login } = useAuth();

    const loginAdminService = async (username: string, password: string): Promise<boolean> => {
        try {
            const result = await axios.post('/admin/login', { username, password });
            login(result.data.data.token);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    return { loginAdminService };
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

export { authService, validateToken }