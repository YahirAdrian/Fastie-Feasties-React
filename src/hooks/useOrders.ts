import { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'

export const useOrders = ()=> {
    const context = useContext(OrderContext);
    if(!context){
        throw new Error("useOrders should be used inside an OrderProvider")
    }

    return context
}