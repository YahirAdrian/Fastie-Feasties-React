import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/authAPI';

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    logout: ()=> void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider

export function AuthProvider({children}: { children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // Restore auth token from localStorage

    useEffect(() =>{
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if(storedToken && storedUser){
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            api.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
        }
    },[]);

    const login = async (user: User, token: string) =>{
        setUser(user);
        setToken(token);

        localStorage.setItem('token', token || '');
        localStorage.setItem('user', JSON.stringify(user));

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    const logout = () => {
        setUser(null);
        setToken(null);

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        delete api.defaults.headers.common.Authorization;
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );  
};

