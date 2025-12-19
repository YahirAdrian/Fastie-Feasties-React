import React, { useState, useEffect } from 'react';
import OrderItem from './OrderItem';
import { useOrders } from '../hooks/useOrders';
import { useAuth } from '../hooks/useAuth';

import { newOrder } from '../services/orderAPI';


interface OrderPanelProps {
    panelOpen: boolean
    setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderPanel: React.FC<OrderPanelProps> = ({panelOpen, setPanelOpen} : OrderPanelProps) => {

    const { orderItems } = useOrders();
    const [subtotal, setSubtotal] = useState(0);
    const { user : userSession, token } = useAuth();

    useEffect(() => {
        const newSubtotal = orderItems.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
        setSubtotal(newSubtotal);
    }, [orderItems]);

    async function createOrder(){
        if(userSession && token){
            const orderData = {
                user:{
                    id: userSession.id
                },
                products: orderItems.map(item => ({id: item.product.id, quantity: item.quantity})),
                comments: "",
                status: "Pendiente"
            }

            console.log(token)

            // Send the data to API to create the order
            try{
                const response = await newOrder(orderData, token);
                console.log(response)

            }catch(error){
                console.log(error)
            }

        }


    }

    return (
        <aside className={"fixed flex flex-col order-panel z-2 bottom-0 right-0 bg-white p-4 pt-6 max-w-dvw md:w-lg h-full shadow-left transition-transform" + " " + (panelOpen ? " translate-x-0" : "translate-x-full")}>
            <div className='flex justify-between'>
                <h3 className='font-lilita text-3xl text-gray-800'>Tu Orden</h3>
                <button className='cursor-pointer me-3'
                    onClick={() => setPanelOpen(false)}
                    >
                    <span className='text-3xl text-primary-500 font-lilita'>X</span>
                </button>
            </div>

            <h4 className='mt-3 text-2xl font-bold'>{`(${orderItems.length}) Productos`}</h4>
            <div className='order-items mt-8 overflow-y-auto h-100'>
                {
                    orderItems.map(orderItem => (
                        <OrderItem
                            key={orderItem.product.id}
                            orderItem={orderItem}
                        />
                    ))
                }
            </div>

            <div className="checkout mt-auto">
                <p className="subtota text-2xl mt-6 font-bold">
                    Subtotal: <span className='text-amber-600 font-bold text-2xl ms-2'>${subtotal}</span>
                </p>
                <button className="comfirm bg-green-600 hover:bg-green-500 text-white font-bold text-xl flex justify-center py-2.5 rounded-md mt-3 cursor-pointer w-full"
                    onClick={()=> createOrder()}
                >
                    <span>Confirmar</span>
                </button>
            </div>
            
        </aside>
    );
}

export default OrderPanel;