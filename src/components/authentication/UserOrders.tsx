import React, { useEffect, useState } from "react";

import OrderHeader from "./orders/OrderHeader";
import OrderDetail from "./orders/OrderDetail";

import { getUserOrders, type Order } from "../../services/orderAPI";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner";

const UserOrders : React.FC = ()=>{

    const [loading, setLoading] = useState<boolean>(false)
    const { user, token } = useAuth()
    const navigate = useNavigate()

    const [orders, setOrders] = useState<Array<Order>>([])

    async function getOrders(){
        setLoading(true)
        if(user && token){
            try{
                const result = await getUserOrders(user.id, token)
                setOrders(result)
                setLoading(false)
                
            }catch(error){
                console.log(error)
            }
        }else{
            navigate('/login')
        }
    }
    useEffect(() => {
        // Wait for auth to initialize (check if localStorage has values)
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        if(user && token){
            getOrders()
        } else if(user === null && token === null && (!storedToken || !storedUser)){
            // Only redirect if no auth data exists at all
            navigate('/login')
        }
        // If storedToken/storedUser exist but user/token are still null, 
        // we're still loading, so do nothing
    }, [user, token, navigate])


    return(
        <>
            <OrderHeader />

            
            <div className="order-list mt-8 mx-12">
                <h2 className="font-lilita text-4xl">Mis Ordenes (3)</h2>

                {loading && (
                    <LoadingSpinner text="Cargando" size="lg" color="text-primary"/>

                )}

                <div className="order-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {orders.map(order => (
                            <OrderDetail
                                key={order.id}
                                order={order}
                            />
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserOrders
