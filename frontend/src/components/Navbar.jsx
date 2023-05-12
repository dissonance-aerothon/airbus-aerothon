import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav class="bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} class="flex items-center">
                        <img src={logo} class="h-8 mr-3" alt="Dissonance Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap ">Dissonance</span>
                    </Link>
                    <div class="flex md:order-2">
                        <Link to={'/signup'}>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0   ">Get started</button>
                        </Link>
                        <button onClick={handleMenuToggle} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class={`${isMenuOpen ? 'flex w-full' : 'hidden'} flex-col items-center justify-between w-full md:flex md:w-auto md:order-1`}>
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white w-full ">
                            <li>
                                <Link to={'/'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  ">Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  ">About</Link>
                            </li>
                            <li>
                                <a href="1" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  ">Services</a>
                            </li>
                            <li>
                                <Link to={'/contact'} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  ">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar