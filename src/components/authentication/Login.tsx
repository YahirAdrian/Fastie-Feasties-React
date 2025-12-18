import React from 'react';

import AuthHeader from './AuthHeader';

import { login } from '../../services/authAPI';

import backgroundImage from '../../assets/background/login-background.jpg';

import { NavLink } from 'react-router-dom';

const Login: React.FC = ()=>{

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
            const result = await login(email, password)
            console.log(result);
        }catch(error){
            console.error("Login failed: ", error);
        }

    }
    
    return (
        <>
            <AuthHeader />

            {/* Login form */}

            <div className="flex items-center justify-center min-h-screen bg-gray-100" style={style}>
                <div className="w-full max-w-lg bg-white rounded-xl shadow-lg shadow-black px-8 py-12 border-4 border-primary-500">
                    <h2 className="font-lilita text-2xl text-gray-800 mb-6">Inicia sesión con tu cuenta</h2>
                    
                    <form className="space-y-4">
                        <div>
                            <label className="bg-accblock text-sm font-medium text-gray-700 mb-1">
                                Correo
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                placeholder="Ingresa tu correo"
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
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>

                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-primary-500 hover:bg-primary-400 text-white font-semibold py-2 rounded-lg transition duration-200"
                            onClick={e=> handleSubmit(e)}
                        >
                            Iniciar sesión
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        No tienes una cuenta?{' '}
                        <NavLink to="/signup" className="text-blue-600 hover:underline">
                            Crea una aquí
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login