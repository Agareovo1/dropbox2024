import React from 'react'

export default function Navigation() {
  return (
    <div>
        <nav className='bg-black'>
            <div className=''>
            <ul className='  flex items-center  space-x-10 text-white '>
                <a className='py-3 px-10 font-bold ' href='./home'>Home</a>
                <a className='py-3 px-10 font-bold' href='./home'>logout</a>
                <a className='absolute right-0 z-10 mt-2 w-60 font-bold origin-top-right rounded-md py-1 ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none ' href='./home'>Sign-Up</a>
                <a className='absolute right-0 z-10 mt-2 w-75 font-bold origin-top-right rounded-md py-1 ring-1 ring-black ring-opacity-5 shadow-lg focus:outline-none ' href='./home'>profile</a>
            </ul>
            </div>
        </nav>
    </div>
  )
}
