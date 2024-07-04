import { createContext, useState, useEffect, useContext, ReactNode, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateToken } from '../services/AuthService';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        checkToken(token)
    }, [])

    const checkToken = async (token: string | null) => {
        if (token) {
            const isValid = await validateToken(token);
            setIsAuthenticated(isValid);
        }
    };

    const login = (token: string) => {
        sessionStorage.setItem('token', token);
        setIsAuthenticated(true);
        navigate('/dashboard');
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth }