import React from 'react';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
    return (
        <section className='m-4 md:m-8'>
            <h3 className='text-2xl md:text-4xl font-lilita'>Hamburguesas</h3>
            <div className="carrousel flex justify-between mt-8">
                {/* Product items will go here */}
                <div className="previous flex flex-col justify-center mt-8">
                    <button className='bg-accent-200 size-14 md:size-20 p-3 rounded-full cursor-pointer border-4 border-accent' title='Anterior'>
                        <span className='font-bold text-lg md:text-2xl font-lilita'>{'<'}</span>
                    </button>
                </div>
                <div className="products flex overflow-hidden p-4">
                    {/* Products are listed here. List product card compoments */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="next flex flex-col justify-center mt-8">
                    <button className='bg-accent-200 size-14 md:size-20 p-3 rounded-full cursor-pointer border-4 border-accent' title='Siguiente'>
                        <span className='font-bold text-lg md:text-2xl font-lilita'>{'>'}</span>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default ProductList;