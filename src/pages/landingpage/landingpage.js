import React, { useEffect } from 'react';
import Navigation from '../../components/navigation/navigation';
import Typed from 'typed.js';

export default function LandingPage() {
    useEffect(() =>{
        const options={
            strings:["Explore our file management system,upload and manage your files, Have questions? please ask"],
            typeSpeed: 50,
            backSpeed: 30,
            loop:true,
        }
        const typed=new Typed('.typed-text', options);
        //cleanup when the components unmounts
        return () =>{
            typed.destroy();
        };
    }, [])
  return (
    <div>
      <Navigation />

      {/* Getting Started Section */}
      <section className="bg-cover bg-center text-white py-20" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/4553277/pexels-photo-4553277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <button className="px-6 py-2 rounded-lg bg-black text-white hover:bg-black font-bold">
              Get Started
            </button>
            <p className='typed-text  font-bold'></p>
          </div>
        </div>
      </section>

       {/* dropbox functions cards */}
    <section>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Box Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* dropbox functions 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.pexels.com/photos/8473774/pexels-photo-8473774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="upload files" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-purple-900">Upload files</h3>
                <p className="text-gray-600">Upload files such as videos,jpeg,.mp4...</p>
              </div>
            </div>
            {/* dropbox functions 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.pexels.com/photos/8872563/pexels-photo-8872563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="files" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-purple-900">Folder</h3>
                <p className="text-gray-600">Create a Folder,subfolders and upload files into them</p>
              </div>
            </div>
            {/* dropbox function 1*/}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.pexels.com/photos/6549629/pexels-photo-6549629.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Featured3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-purple-900">CRUD</h3>
                <p className="text-gray-600">can you perform CRUD, find out click on the get stated to sign up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*footer section*/}
      <footer className=' bg-gray-900 text-white py-8 '>
        <div className='container mx-auto items-center'>
            <p>&copy; 2024 dropBox. All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
