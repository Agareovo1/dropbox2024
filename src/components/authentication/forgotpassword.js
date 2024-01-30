import React from 'react';

export default function Forgotpassword() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-white p-8 rounded-md shadow-md'>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='rounded-md px-4 py-2 border border-gray-300 w-full'
          />
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Re-type Password
          </label>
          <input
            type='password'
            id='password'
            className='rounded-md px-4 py-2 border border-gray-300 w-full'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          submit
        </button>
        
      </form>
      
    </div>
  );
}
