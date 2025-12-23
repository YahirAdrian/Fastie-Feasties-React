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

export interface OrderProductPivot {
    order_id: number;
    product_id: number;
    quantity: number;
    subtotal: string;
    created_at: string;
    updated_at: string;
}

export interface OrderProduct extends Product {
    pivot: OrderProductPivot;
}

export interface Order {
    id: number;
    user_id: number;
    status: string;
    comments: string | null;
    created_at: string;
    updated_at: string;
    products: OrderProduct[];
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

export async function getUserOrders(user_id: number, token: string) : Promise<Array<Order>>{
    try{
        const result = await axios.get(`${API_URL}/orders/user/${user_id}`, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        return result.data
    }catch(error){
        throw new Error("Failed to get user oders. Try logging in first. " + error)
    }
}
