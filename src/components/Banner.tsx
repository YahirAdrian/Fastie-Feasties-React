import * as React from 'react';
import bannerImage from '../assets/banner/banner.webp';

const Banner: React.FC = () => {
   return (
    <div className='w-full min-h-[70vh] lg:max-h-dvh flex justify-center'>
        <img src={bannerImage} className='w-dvw object-cover shadow-lg' alt='Banner imágen hamburguesa'/>
        <div className='absolute text-white text-center rounded-2xl backdrop-blur-md bg-black/40 md:bg-black/10 shadow-lg max-w-lg top-1/8 md:top-1/4 left-1/12 mx-2 py-20 px-8'>
            <h2 className="font-lilita text-3xl lg:text-6xl"> Un antojito para aquí, o para llevar<br/>
             <span className='text-xl lg:text-4xl'>¡Cómo tu quieras!</span>
            </h2>
            <p className='mt-3 italic text-lg md:text-2xl'> Ordena aquí desde la comodidad de tu dispositivo y recibe en minutos</p>
        </div>
    </div>
   )
};

export default Banner;