import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function LandingPage() {
  useEffect(() => {
    const options = {
      strings: ["Explore our file management system, upload and manage your files, Have questions? please ask"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed('.typed-text', options);

    // Cleanup when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* Getting Started Section */}
      <section className="bg-cover bg-center text-white py-20" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/4553277/pexels-photo-4553277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
        <div className="container mx-auto flex flex-col items-center">
          <h1 className='flex items-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>
            <img className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 mr-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png' alt='Dropbox Logo' />
            Dropbox
          </h1>

          <div className="mt-4">
            <button className='px-6 py-3 rounded-lg bg-black text-white hover:bg-blue-700 text-base sm:text-lg font-bold'>
              <a href='./login'>Get Started</a>
            </button>
          </div>

          <p className='mt-4 text-center typed-text text-base sm:text-lg font-bold'></p>
        </div>
      </section>

      {/* Dropbox functions cards */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Box Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dropbox function 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.pexels.com/photos/8473774/pexels-photo-8473774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="upload files" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-purple-900">Upload files</h3>
                <p className="text-gray-600">Upload files such as videos, jpeg, .mp4...</p>
              </div>
            </div>
            {/* Dropbox function 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.pexels.com/photos/8872563/pexels-photo-8872563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="files" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-purple-900">Folder</h3>
                <p className="text-gray-600">Create a Folder, subfolders and upload files into them</p>
              </div>
            </div>
            {/* Dropbox function 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.pexels.com/photos/6549629/pexels-photo-6549629.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Featured3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-purple-900">CRUD</h3>
                <p className="text-gray-600">Can you perform CRUD? Find out by clicking on the Get Started button to sign up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className='bg-gray-900 text-white py-8'>
        <div className='container mx-auto items-center'>
          <p>&copy; 2024 dropBox. All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
