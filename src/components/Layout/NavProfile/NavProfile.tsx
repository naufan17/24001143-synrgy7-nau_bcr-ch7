import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../middleware/AuthProvider';

const NavProfile: React.FC = () => {
    const [admin, setAdmin] = useState<string | null>(null);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const { logout } = useAuth();

    const logoutUser = () => {
        logout();
    }

    useEffect(() => {
        setAdmin(localStorage.getItem('admin'))
    }, [])

    return (
        <nav>
            <div className="relative h-12 px-4 mt-4 md:px-8 md:mt-8">
                <div className="flex items-center justify-end w-full">
                    <button
                        type="button"
                        aria-label="Open item" 
                        title="Open item"
                        onClick={() => setShowMenu(!showMenu)}
                        className={`inline-flex w-32 py-1.5 items-center justify-center font-medium text-sm md:text-base ${showMenu? 'border-x-2 border-t-2 rounded-t-lg' : 'border-slate-200 border-2 rounded-lg'}`}
                    >
                        <img
                            src={'/images/img_photo.png'}
                            alt="Profile"
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        {admin}
                    </button>
                </div>
                {showMenu && (
                    <div className="flex items-center justify-end w-full">
                        <div className="inline-flex w-32 bg-gray-100 border-x-2 border-b-2 border-slate-200 rounded-b-lg hover:bg-gray-200">
                            <button 
                                onClick={logoutUser}
                                className="block py-1.5 ml-4 font-medium text-sm md:text-base"
                            >
                                Logout
                            </button>
                        </div>                
                    </div>                
                )}
            </div>
        </nav>
    )
}

export default NavProfile;