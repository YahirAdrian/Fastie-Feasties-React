import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
    baseURL: API_URL
});


export interface AuthResponse {
    token: string;
    user: {
        id: number
        is_admin: boolean;
        name: string;
        email: string;
        created_at: string;
        updated_at: string;
        email_verified_at: string | null;
    }
}
export async function login(email: string, password: string) : Promise<AuthResponse>{

    const data = { email, password}

    try{
        const response = await axios.post(`${API_URL}/login`, data)

        return response.data

    }catch(error){
        throw Error("Error during login: " + error);
    }

}

export async function signup(name: string, email: string, password: string) : Promise<AuthResponse>{

    const data = {
        name,
        email,
        password,
        "password_confirmation": password
    }

    try{
        const response = await  axios.post(`${API_URL}/register`, data)

        return response.data
    }catch(error){
        throw Error("Error during signup: " + error);
    }
}