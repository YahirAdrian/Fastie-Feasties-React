import React from 'react';
import searchIcon from '../assets/icons/search.svg';

const Search: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between mt-6'>
            <div className='m-4 md:m-8'>
                <h3 className='font-lilita text-2xl md:text-4xl lg:text-5xl'>Menú digital</h3>
                <p className='text-lg md:text-xl pt-5'>Encuentra los productos que buscas aquí y agrégalos a tu orden</p>
            </div>
            <div className='m-4 md:m-8 flex items-center gap-5'>
                <input
                    className='w-2xs border border-gray-300 rounded-md p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-accent'
                 type="search" name="product_search" id="search" title='Buscar producto' placeholder='Buscar producto'/>
                 <button className='cursor-pointer bg-gray-100 p-3 rounded-full'>
                    <img src={searchIcon} alt="Buscar" className='size-6'/>

                 </button>
            </div>
        </div>
    );
};

export default Search;