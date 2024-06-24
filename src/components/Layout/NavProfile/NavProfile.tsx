import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../config/Api';

interface Admin {
    id: string;
    username: string;
    super_admin: boolean;
    exp: number;
    iat: number;
}

const NavProfile: React.FC = () => {
    const [admin, setAdmin] = useState<Admin | undefined>(undefined);
    const [showMenu, setShowMenu] = useState<boolean>(false);

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
        return null
    }

    return (
        <nav>
            <div className="relative h-12 px-4 mt-4 md:px-8 md:mt-8">
                <div className="flex items-center justify-end w-full">
                    <button
                        type="button"
                        aria-label="Open item" 
                        title="Open item"
                        onClick={() => setShowMenu(!showMenu)}
                        className={`inline-flex w-32 py-1.5 items-center justify-center font-medium text-sm md:text-base ${showMenu? 'border-slate-300 border-x-2 border-t-2 rounded-t-lg' : 'border-slate-200 border-2 rounded-lg'}`}
                    >
                        <img
                            src={'/images/img_photo.png'}
                            alt="Profile"
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        {admin.username}
                    </button>
                </div>
                {showMenu && (
                    <div className="flex items-center justify-end w-full">
                        <div className="inline-flex w-32 bg-gray-100 border-x-2 border-b-2 border-slate-300 rounded-b-lg hover:bg-gray-200">
                            <Link 
                                to="/logout"
                                className="block py-1.5 ml-4 font-medium text-sm md:text-base"
                            >
                                Logout
                            </Link>
                        </div>                
                    </div>                
                )}
            </div>
        </nav>
    )
}

export default NavProfile;