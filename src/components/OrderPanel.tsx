import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderItem from './OrderItem';
import { useOrders } from '../hooks/useOrders';
import { useAuth } from '../hooks/useAuth';

import { newOrder } from '../services/orderAPI';


interface OrderPanelProps {
    panelOpen: boolean
    setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderPanel: React.FC<OrderPanelProps> = ({panelOpen, setPanelOpen} : OrderPanelProps) => {

    const { orderItems, setOrderItems } = useOrders();
    const [subtotal, setSubtotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const { user : userSession, token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const orderData = localStorage.getItem('order');
        if (orderData) {
            setOrderItems(JSON.parse(orderData));
        }
    }, []);

    useEffect(() => {
        const newSubtotal = orderItems.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
        if(orderItems.length !== 0){

            localStorage.setItem('order', JSON.stringify(orderItems))
        }
        setSubtotal(newSubtotal);
    }, [orderItems]);

    async function createOrder(){
        if(userSession && token){
            setIsLoading(true);
            const orderData = {
                user:{
                    id: userSession.id
                },
                products: orderItems.map(item => ({id: item.product.id, quantity: item.quantity})),
                comments: "",
                status: "Pendiente"
            }

            // Send the data to API to create the order
            try{
                const response = await newOrder(orderData, token);
                console.log(response);
                
                // Redirect to my-orders page on success
                navigate('/my-orders');
            }catch(error){
                console.log(error);
                setIsLoading(false);
            }

        }else{
            navigate('/login')
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
                <button 
                    className="comfirm bg-green-600 hover:bg-green-500 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-bold text-xl flex justify-center items-center py-2.5 rounded-md mt-3 cursor-pointer w-full"
                    onClick={()=> createOrder()}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Creando orden...</span>
                        </>
                    ) : (
                        <span>Confirmar</span>
                    )}
                </button>
            </div>
            
        </aside>
    );
}

export default OrderPanel;