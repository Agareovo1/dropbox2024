import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-black'>
      <nav>
        <div className='flex items-center justify-between'>
          {/* Left section */}
          <ul className='flex items-center space-x-10 text-white'>
            <li>
              <a className='py-3 px-10 font-bold' href='/home'>
                Home
              </a>
            </li>
            <li>
              <a className='py-3 px-10 font-bold' href='/logout'>
                Logout
              </a>
            </li>
          </ul>

          {/* Right section */}
          <ul className='flex items-center space-x-10 text-white'>
            <li>
              <a className='font-bold' href='/signup'>
                Sign-Up
              </a>
            </li>
            <li className='flex items-center font-bold'>
              <a href='/profile'>
                <BsPerson className='mr-2' size={20} />
              </a>
              {/* Show/hide menu icon based on the state */}
              {isMenuOpen ? (
                <AiOutlineClose size={20} onClick={toggleMenu} />
              ) : (
                <HiOutlineMenuAlt4 size={20} onClick={toggleMenu} />
              )}
            </li>
          </ul>
        </div>

        {/* Responsive menu */}
        {isMenuOpen && (
          <div className='md:hidden'>
            {/* Add your menu items here */}
            <a href='/home' className='block py-2 px-4 text-white'>
              Home
            </a>
            <a href='/logout' className='block py-2 px-4 text-white'>
              Logout
            </a>
            <a href='/signup' className='block py-2 px-4 text-white'>
              Sign-Up
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
