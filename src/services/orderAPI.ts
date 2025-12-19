import { type Product } from "./productAPI";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export interface OrderItem{
    product: Product;
    quantity: number;
}

interface OrderData{
    user:{
        id: number;
    },
    products: Array<{
        id: number
        quantity: number
    }>,
    comments: string;
    status: string;
    
}

export async function newOrder(data : OrderData, token : string){
    try{
        const result = await axios.post(`${API_URL}/orders/new`, data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return result.data
    }catch(error){
        throw new Error("Order creation failed: " + error)
    }
}
