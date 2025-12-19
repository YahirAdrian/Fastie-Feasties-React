import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../Header';

const Profile: React.FC = () =>{

    const [panelOpen, setPanelOpen] = useState<boolean>(false);

    const defaultUserPic = "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff";

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/');
    }


    if (!user) {
        // Optionally, you could redirect to login or show "not logged in"
        return (
            <>
            <Header setPanelOpen={setPanelOpen} />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl text-gray-700 font-lilita mb-4">No has iniciado sesión</h2>
                    <NavLink
                        to="/login"
                        className="px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition"
                    >
                        Iniciar sesión
                    </NavLink>
                </div>
            </div>
            </>
        );
    }

    
    return (
        <>
            <Header setPanelOpen={setPanelOpen} />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg shadow-black px-8 py-12 border-4 border-primary-500 flex flex-col items-center">
                    <img
                        src={defaultUserPic + `&name=${encodeURIComponent(user.name)}`}
                        alt="User"
                        className="w-24 h-24 rounded-full shadow mb-6"
                    />
                    <h2 className="font-lilita text-3xl text-gray-900 mb-2">{user.name}</h2>
                    <p className="text-gray-700 text-lg mb-4">{user.email}</p>

                    <NavLink
                        to="/my-orders"
                        className="w-full mb-4 px-4 py-2 text-center bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition"
                    >
                        Ver mis órdenes
                    </NavLink>

                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-400 transition"
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>  
        </>
    );
}

export default Profile