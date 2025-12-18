import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthHeader from './AuthHeader';

import backgroundImage from '../../assets/background/login-background.jpg';
import { signup } from '../../services/authAPI';



const Signup: React.FC = () =>{

    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); 

    const style = {
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundRepeat: "repeat",
        opacity: .85

    };


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Send the data to the API
        try{
            const result = await signup(userName, email, password)
            console.log(result);
        }catch(error){
            console.error("Signup failed: ", error);
        }
    }
    
    return (
        <>
        
        <AuthHeader />

            {/* Login form */}

            <div className="flex items-center justify-center min-h-screen bg-gray-100" style={style}>
                <div className="w-full max-w-lg bg-white rounded-xl shadow-lg shadow-black px-8 py-12 border-4 border-primary-500">
                    <h2 className="font-lilita text-2xl text-gray-800 mb-6">Crea una cuenta</h2>
                    
                    <form className="space-y-4">
                        <div>
                            <label className="bg-accblock text-sm font-medium text-gray-700 mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                value={userName}
                                onChange={e=> setUserName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                placeholder="Nombre"
                            />
                        </div>

                        <div>
                            <label className="bg-accblock text-sm font-medium text-gray-700 mb-1">
                                Correo
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                placeholder="Correo"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                placeholder="Crea tu contraseña"
                            />
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-primary-500 hover:bg-primary-400 text-white font-semibold py-2 rounded-lg transition duration-200"
                            onClick={e=> handleSubmit(e)}
                        >
                            Registrarse
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        ¿Ya tienes cuenta?{' '}
                        <NavLink to="/signup" className="text-blue-600 hover:underline">
                            Iniciar sesión
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Signup