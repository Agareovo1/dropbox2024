import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

const history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;

      // Now you can interact with the user object or update the database as needed
      console.log('User signed up:', user);
      history('/')

    } catch (error) {
      console.error('Signup error:', error.code, error.message);
      // Handle error, display a message, etc.
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-white p-8 rounded-md shadow-md' onSubmit={handleSubmit}>
      <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            First Name
          </label>
          <input
            type='text'
            className='rounded-md px-4 py-2 border border-gray-300 w-full'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Last Name
          </label>
          <input
            type='text'
            className='rounded-md px-4 py-2 border border-gray-300 w-full'
          />
        </div>
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
          Create
        </button>
        <h3 className='mt-4'>
        Already have an account? <a href='/Login'>Login</a>
      </h3>
      </form>
    </div>
  );
}
