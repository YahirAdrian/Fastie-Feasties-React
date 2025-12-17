import { createContext, useState } from 'react';
import { type OrderItem } from '../services/orderAPI';

interface OrderContextType {
    orderItems: OrderItem[];
    setOrderItems: (items: OrderItem[]) => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({children}: {children: React.ReactNode}) => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    return (
        <OrderContext.Provider
         value={{
            orderItems,
            setOrderItems
         }}
         >
            {children}
         </OrderContext.Provider>
    )
}