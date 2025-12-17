import { type Product } from "./productAPI";

export interface OrderItem{
    product: Product;
    quantity: number;
}
