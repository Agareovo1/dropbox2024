import React from 'react';
import { BsPerson } from 'react-icons/bs';

export default function Navigation() {
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
              <a
                className='font-bold'
                href='/signup'
              >
                Sign-Up
              </a>
            </li>
            <li>
              <a
                className='flex items-center font-bold'
                href='/profile'
              >
                <BsPerson className='mr-2' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
