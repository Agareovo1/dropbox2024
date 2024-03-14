import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      console.log('user signed in', user);
      // You can add logic to redirect or update UI after successful login
      history('/upload')
    } catch (error) {
      console.error('login error', error.code, error.message);
      // Handle error, display a message, etc.
    }

    
  };

  const handleResetPassword =()=>{
    history('/forgotpassword')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-white p-8 rounded-md shadow-md' onSubmit={handleLogin}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <a href='' onClick={handleResetPassword}>Forgot password?</a>
        </h3>
        <h3 className='mt-4'>
          <a href='./signup'>Not a member? Register</a>
        </h3>
      </form>
    </div>
  );
}
