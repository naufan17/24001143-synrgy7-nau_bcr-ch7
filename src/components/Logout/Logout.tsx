import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();

    const logoutUser = async () => {
        try {
            sessionStorage.removeItem('token');
            navigate('/login');
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        logoutUser();
    }, [])

    return (
        <></>
    )
}

export default Logout;