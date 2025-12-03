import React from 'react';
import productImg from '../assets/food/classic-burger.jpeg'
import addIcon from '../assets/icons/add.svg'

const ProductCard: React.FC = () => {
    return (
        <article className='product-card flex flex-col p-2 pb-5 mx-3 rounded-xl min-w-xs lg:min-w-sm bg-gray-100 border-2 border-gray-300 shadow-black/10 hover:shadow-lg hover:scale-105 transition-transform duration-300'>
            <img src={productImg} alt="Imágen del producto - Hamburguesa clásica" className='rounded-lg mb-4'/>
            <h4 className='text-xl md:text-2xl font-bold ms-3'>Hamburguesa clásica</h4>
            <p className="description text-md mt-2 mx-3"> Hamburguesa clásica con queso y carne de res.</p>
            <div className="quantity-select mt-3 ms-3 flex items-center">
                <button className='bg-blue-50 size-8 p-4 rounded-full cursor-pointer border-4 border-blue-300 flex flex-col items-center justify-center' title='Disminuir cantidad'>
                    <span className='font-bold text-2xl font-lilita'>-</span>
                </button>

                <input
                    className='w-fit text-center border border-gray-300 rounded-md p-2 mx-2 focus:outline-none focus:ring-2 focus:bg-blue-100 focus:ring-blue-50 text-xl font-bold'
                 type="number" name="quantity" id="quantity-input" title='cantidad' value={1} min={0} max={9}/>

                <button className='bg-blue-50 size-8 p-4 rounded-full cursor-pointer border-4 border-blue-300 flex flex-col items-center justify-center' title='Disminuir cantidad'>
                    <span className='font-bold text-lg md:text-2xl font-lilita'>+</span>
                </button>
                <span className='subtotal text-accent font-bold text-3xl items-center mx-4'>$10</span>
            </div>
            <button className='bg-accent text-white font-bold text-xl flex justify-center py-1 rounded-md mt-3 cursor-pointer'>
                <img className='size-8' src={addIcon} alt="Agregar" width={32}/>
                <span className='ms-3'>Agregar a la orden</span>
            </button>
        </article>
    )
}

export default ProductCard;