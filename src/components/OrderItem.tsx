import React, { useState } from 'react';
import removeIcon from '../assets/icons/remove.svg';
import { type OrderItem as OrderItemProps } from '../services/orderAPI';
import { useOrders } from '../hooks/useOrders';

interface OrderItemsProps {
    key: number;
    orderItem: OrderItemProps; 
}

const OrderItem: React.FC<OrderItemsProps> = ({ orderItem }) => {

    const serverURL = import.meta.env.VITE_API_SERVER_URL;

    const { product, quantity } = orderItem
    const { name, price, image} = product

    const [itemQuantity, setItemQuantity] = useState(quantity)
    
    const { orderItems, setOrderItems } = useOrders()

    function editQuantity(action: "increase" | "decrease") {
        // Calculate the new quantity
        let newQuantity;

        if(action === "increase"){
            newQuantity = itemQuantity < 9 ? itemQuantity + 1 : 9;
            
        }else{
            newQuantity = itemQuantity > 1 ? itemQuantity - 1 : 1;
        }
        
        // Update quantity in the state
        setItemQuantity(newQuantity)
        
        // Update the orderItems in the context with the new quantity
        setOrderItems(orderItems.map(item => 
            item.product.id === orderItem.product.id 
                ? { ...item, quantity: newQuantity  } 
                : item
        ))
    }


    function removeOrderItem() {
        // Remove the item from the orderItems in the context
        setOrderItems(orderItems.filter(item => item.product.id !== orderItem.product.id))
    }

    return (
        <div className="order-item mt-4 flex flex-col md:flex-row bg-gray-100 border-2 border-accent-700 rounded-xl p-4">
            <div className="product-info ms-2 w-full">
                <div className="flex justify-between">
                    <h5 className='font-bold text-lg md:text-xl text-gray-800'>{name}</h5>
                    <button className='cursor-pointer hover:scale-110 ms-2' title={`Eliminar producto - ${name}`}
                        onClick={()=> removeOrderItem()}
                    ><img className='size-8' src={removeIcon} alt="Eliminar producto" width={32} /></button>
                </div>
                <img className='w-40 rounded-2xl mx-auto mt-2' src={`${serverURL}/product-images/${image}`} alt={`Imágen producto - ${name}`} width={120}  />

                <div className="quantity-select mt-3 ms-3 flex items-center flex-wrap justify-center md:justify-start">
                    <button className='bg-blue-50 size-8 p-4 rounded-full cursor-pointer border-4 border-blue-300 flex flex-col items-center justify-center' title='Disminuir cantidad'
                        onClick={()=> editQuantity("decrease")}
                    >
                        <span className='font-bold text-2xl font-lilita'>-</span>
                    </button>

                    <input
                        className='w-fit text-center border border-gray-300 rounded-md p-2 mx-2 focus:outline-none focus:ring-2 focus:bg-blue-100 focus:ring-blue-50 text-xl font-bold'
                    type="number" name="quantity" id="quantity-input" title='cantidad' value={itemQuantity} min={0} max={9} onChange={e=> setItemQuantity(parseInt(e.target.value))}/>

                    <button className='bg-blue-50 size-8 p-4 rounded-full cursor-pointer border-4 border-blue-300 flex flex-col items-center justify-center' title='Disminuir cantidad'
                        onClick={()=> editQuantity("increase")}
                    >
                        <span className='font-bold text-lg md:text-2xl font-lilita'>+</span>
                    </button>
                    <span className='subtotal text-amber-500 font-bold text-3xl items-center mx-4'>${itemQuantity * price}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;