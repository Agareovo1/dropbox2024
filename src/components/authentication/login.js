import React from 'react';

export default function Login() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-white p-8 rounded-md shadow-md'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='rounded-md px-4 py-2 border border-gray-300 w-full'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            Password
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
          Log In
        </button>
        <h3 className='mt-4'>
        Don't have an account? <a href='/'>Signup</a>
      </h3>
      </form>
      
    </div>
  );
}
