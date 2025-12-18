import React from 'react';

const Search: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between mt-6'>
            <div className='m-4 md:m-8'>
                <h3 className='font-lilita text-2xl md:text-4xl lg:text-5xl'>Menú digital</h3>
                <p className='text-lg md:text-xl pt-5'>Encuentra los productos que buscas aquí y agrégalos a tu orden</p>
            </div>
        </div>
    );
};

export default Search;