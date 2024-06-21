import React, { useState, useEffect } from 'react';
import axios from '../../config/Api';

interface Admin {
    id: string;
    username: string;
    super_admin: boolean;
    exp: number;
    iat: number;
}

const NavProfile: React.FC = () => {
    const [admin, setAdmin] = useState<Admin | undefined>(undefined);

    const getAdmin = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const result = await axios.get('admin', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAdmin(result.data.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getAdmin();
    }, [])

    if (!admin) {
        return (
            <></>
        )
    }

    return (
        <nav>
            <div className="relative px-4 mt-4 md:px-8 md:mt-8">
                <div className="flex items-center justify-end w-full">
                    <div className="h-11 px-4 py-2 border-2 border-slate-300 rounded-lg">
                        <span className="font-medium text-sm md:text-base">
                            {admin.username}
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavProfile;