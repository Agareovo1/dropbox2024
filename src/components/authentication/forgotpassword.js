import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';


export default function Forgotpassword() {

  const history = useNavigate()

  const handleSubmit= async(e)=>{
    e.preventDefault()
      const emalVal = e.target.email.value;
      sendPasswordResetEmail(auth, emalVal).then(data=>{
        alert('check your gmail')
      history('/login')

      }).catch(err=>{
        alert(err.code)
      })
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='bg-white p-8 rounded-md shadow-md' onSubmit={handleSubmit}>
      <h1 className='font-bold'>Forgot Password</h1>
        <div className='mb-6'>
          <input
            type='email'
            id='email'
            className='rounded-md px-4 py-2 border border-gray-300 w-full'
          />
          
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Reset
        </button>
        
      </form>
      
    </div>
  );
}
