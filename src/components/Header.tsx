import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo/logo-128.png';
import userIcon from '../assets/icons/user.png';

interface HeaderProps {
    setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC <HeaderProps> = ({setPanelOpen} : HeaderProps) => {

  const [menuOpen, setMenuOpen] = React.useState(false);
    return (
        <header className='bg-primary flex justify-between p-2 fixed w-dvw z-1 shadow-xl shadow-black/30'>
          <div className='flex items-center gap-2'>
            <NavLink className='flex items-center' to='/'>
              <img src={logo} alt="Fastie-Feasties Logo" className='size-12 sm:size-16 shadow-2xl' />
              <h1 className='font-lilita text-white text-lg sm:text-2xl md:text-4xl'>Fastie-Feastie's</h1>
            </NavLink>
          </div>
          <nav className='px-4 py-4 flex items-center gap-4'>
            <ul className='full-menu justify-around items-center px-4 hidden sm:flex'>
              <li><a className='px-3 hover:text-amber-300 h-fit text-white font-bold text-sm md:text-xl' href='#products'>Productos</a></li>
              <li
                onClick={()=> setPanelOpen(true)}
              >
                <a className='px-3 hover:text-amber-300 h-fit text-amber-200 font-bold text-sm md:text-xl' href='/order' onClick={e=> e.preventDefault()}>Tu orden</a>
              </li>
              <li><a className='px-3 hover:text-amber-300 h-fit text-white font-bold text-sm md:text-xl' href='/my-orders'>Ordenes</a></li>
              <li>
                <NavLink className='px-3 hover:text-amber-300 h-fit text-white font-bold text-sm md:text-xl flex' to='/login' title='Login'>
                  <img src={userIcon} className='size-8' alt='Icono usuario'/>
                  <span className='px-2'>Login</span>
                </NavLink>
              </li>
            </ul>


            {/* Mobile menu */}
            <div className='flex sm:hidden items-center'>
              <li className='list-none'
                onClick={()=> setPanelOpen(true)}
              >
                <a className='px-3 text-amber-200 font-bold text-sm md:text-xl' href='/order' onClick={e=> e.preventDefault()}>Tu orden</a>
              </li>
              <button className='text-white p-2' onClick={() => setMenuOpen(!menuOpen)}>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
              </button>
            </div>

            <div className={`additional-mobile-menu absolute right-0 w-dvw overflow-hidden transition-all duration-800 ${menuOpen ? 'h-100' : 'h-0'}`}>
              <ul className='flex flex-col items-center bg-primary p-4 sm:hidden'>
              <li className='py-2 hover:bg-amber-50'><a className='px-3 text-white font-bold text-sm md:text-xl' href='#products'>Productos</a></li>
              <li className='py-2 hover:bg-amber-50'><a className='px-3 text-white font-bold text-sm md:text-xl' href='/about'>Acerca de</a></li>
              <li className='py-2 hover:bg-amber-50'>
                <NavLink className='px-3 text-white font-bold text-sm md:text-xl flex' to='/login' title='Login'>
                  <img src={userIcon} className='size-6' alt='Icono usuario'/>
                  <span className='px-3'>Login</span>
                </NavLink>
              </li>
              </ul>
              </div>
          </nav>
        </header>
    );
};
export default Header;