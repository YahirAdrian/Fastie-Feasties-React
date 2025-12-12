import React from 'react';
import OrderItem from './OrderItem';

interface OrderPanelProps {
    panelOpen: boolean
    setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderPanel: React.FC<OrderPanelProps> = ({panelOpen, setPanelOpen} : OrderPanelProps) => {

    return (
        <aside className={"fixed flex flex-col order-panel z-2 bottom-0 right-0 bg-gray-200 p-4 pt-6 max-w-dvw md:w-lg h-full shadow-left transition-transform" + " " + (panelOpen ? " translate-x-0" : "translate-x-full")}>
            <div className='flex justify-between'>
                <h3 className='font-lilita text-3xl text-gray-800'>Tu Orden</h3>
                <button className='cursor-pointer me-3'
                    onClick={() => setPanelOpen(false)}
                    >
                    <span className='text-3xl text-primary-500 font-lilita'>X</span>
                </button>
            </div>

            <h4 className='mt-3 text-2xl font-bold'>(3) Productos</h4>
            <div className='order-items mt-8 overflow-scroll'>
                <OrderItem
                 />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>

            <div className="checkout mt-auto">
                <p className="subtota text-2xl mt-6 font-bold">
                    Subtotal: <span className='text-amber-600 font-bold text-2xl ms-2'>$10</span>
                </p>
                <button className="comfirm bg-green-600 hover:bg-green-500 text-white font-bold text-xl flex justify-center py-2.5 rounded-md mt-3 cursor-pointer w-full">
                    <span>Confirmar</span>
                </button>
            </div>
            
        </aside>
    );
}

export default OrderPanel;