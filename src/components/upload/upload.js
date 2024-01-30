import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faFileAlt, faFolderPlus } from '@fortawesome/free-solid-svg-icons';

export default function Upload() {
  return (
    <nav className='flex items-center justify-between py-10 space-x-9 bg-white'>
      <h1 className='font-bold space-x-10'>Root</h1>
      <ul className='flex space-x-4 ml-auto'>
        <li className='nav-item'>
          <button className='rounded-sm font-bold bg-blue-500 text-white px-4 py-2'>
            <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload File
          </button>
        </li> 
        <li className='nav-item'>
          <button className='rounded-sm font-bold bg-green-500 text-white px-4 py-2'>
            <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create File
          </button>
        </li> 
        <li className='nav-item'>
          <button className='rounded-sm font-bold bg-yellow-500 text-white px-4 py-2'>
            <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
          </button>
        </li> 
      </ul>
    </nav>
  );
}
