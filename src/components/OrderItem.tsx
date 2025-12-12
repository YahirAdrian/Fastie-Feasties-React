import React from 'react';
import productImg from '../assets/food/burgers/classic-burger.jpeg';
import removeIcon from '../assets/icons/remove.svg';

const OrderItem: React.FC = () => {
// Provisional states for order item

    return (
        <div className="order-item mt-4 flex flex-col md:flex-row bg-gray-50 rounded-xl p-4 shadow-md">
            <div className="product-info ms-2 w-full">
                <div className="flex justify-between">
                    <h5 className='font-bold text-lg md:text-xl text-gray-800'>Hamburguesa clásica</h5>
                    <button className='cursor-pointer hover:scale-110 ms-2'><img className='size-8' src={removeIcon} alt="Eliminar producto" width={32} /></button>
                </div>
                <img className='w-40 rounded-2xl mx-auto mt-2' src={productImg} alt="Imágen product Hamburguesa clásica" width={120}  />

                <div className="quantity-select mt-3 ms-3 flex items-center flex-wrap justify-center md:justify-start">
                    <button className='bg-blue-50 size-8 p-4 rounded-full cursor-pointer border-4 border-blue-300 flex flex-col items-center justify-center' title='Disminuir cantidad'>
                        <span className='font-bold text-2xl font-lilita'>-</span>
                    </button>

                    <input
                        className='w-fit text-center border border-gray-300 rounded-md p-2 mx-2 focus:outline-none focus:ring-2 focus:bg-blue-100 focus:ring-blue-50 text-xl font-bold'
                    type="number" name="quantity" id="quantity-input" title='cantidad' value={1} min={0} max={9} onChange={()=> console.log("Change")}/>

                    <button className='bg-blue-50 size-8 p-4 rounded-full cursor-pointer border-4 border-blue-300 flex flex-col items-center justify-center' title='Disminuir cantidad'>
                        <span className='font-bold text-lg md:text-2xl font-lilita'>+</span>
                    </button>
                    <span className='subtotal text-amber-500 font-bold text-3xl items-center mx-4'>$10</span>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;