import axios from "axios";
export interface Product {
    id: number;
    category: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() : Promise<Product[]> {
    
    const url = `${API_URL}/products`
    const response = await axios.get(url)
        .then(res => res.data)
        .catch(err => {
        console.error("Error fetching products:", err);
    });

    return response
}

