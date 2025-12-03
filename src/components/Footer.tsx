import React from 'react';
import logo from '../assets/logo/logo-64.png';
import githubIcon from '../assets/icons/github.svg';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <img src={logo} alt="Fastie Feasties Logo" className="h-12 mb-4 inline-block" />
                        <h3 className="font-lilita text-lg md:text-2xl mb-2 inline-block ms-2">Fastie Feasties</h3>
                        <p className="text-gray-400">Tu destino de comida rápida favorito</p>
                        <p className="text-gray-400 italic">Este proyecto fue creado con mucho amor ♡ <br/> 
                        *La información de este sitio web, es sólamente con fines de demostración y no pertenece a ningún negocio real.</p>

                        <div className="mt-4">
                            <a href="https://www.github.com/YahirAdrian/Fastie-Feasties-React" className='mt-2 border-2 py-2 px-3 rounded-md hover:bg-gray-800 flex items-center w-fit' target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub Repository" className="h-6 w-6 inline-block hover:opacity-75" />
                                <span className='mx-2'>Ver en Github</span>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4v text-2xl">Links</h4>
                        <ul className="space-y-2 text-gray-400 mt-2">
                            <li><a href="/" className="hover:text-white">Inico</a></li>
                            <li><a href="/orders" className="hover:text-white">Ordenes</a></li>
                            <li><a href="/profile" className="hover:text-white">Cuenta</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-2xl">Contacto</h4>
                        <p className="text-gray-400">Email: examplemail@fastiefeasties.com</p>
                        <p className="text-gray-400">Teéfono: (555) 123-4567</p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-4" />

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm">
                    <p>&copy; {currentYear} Fastie Feasties. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;