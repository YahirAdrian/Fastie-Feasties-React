import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../assets/logo/logo-128.png';
import userIcon from '../../assets/icons/user.png';



const AuthHeader: React.FC = () => {

    const location = useLocation().pathname

    return (
        <header className='bg-primary flex justify-between p-2 fixed w-dvw z-1 shadow-xl shadow-black/30'>
          <div className='flex items-center gap-2'>
            <NavLink className='flex items-center' to='/'>
              <img src={logo} alt="Fastie-Feasties Logo" className='size-12 sm:size-16 shadow-2xl' />
              <h1 className='font-lilita text-white text-lg sm:text-2xl md:text-4xl'>Fastie-Feastie's</h1>
            </NavLink>
          </div>
          <nav className='px-4 py-4 flex items-center gap-4'>
            <ul className='full-menu justify-around items-center px-4 flex'>
              <li>
                <NavLink className='px-3 hover:text-amber-300 h-fit text-white font-bold text-sm md:text-xl flex' to={location === '/signup' ? '/login' : '/signup'} title='Login'>
                  <img src={userIcon} className='size-8' alt='Icono usuario'/>
                  <span className='px-2'>{location === '/signup' ? 'Login' : 'Registro'}</span>
                </NavLink>
              </li>
            </ul>

          </nav>
        </header>
    );
};
export default AuthHeader;