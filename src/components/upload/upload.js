import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faFileAlt, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { storage } from '../../utils/firebase';
import { ref } from "firebase/storage";
import { v4 } from 'uuid';
import { uploadBytes } from 'firebase/storage';

export default function Upload({ setIsCreateFolderModalOpen }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [folderName, setFolderName] = useState('');

  const handleFileUpload = () => {
    if (selectedFile === null) return;
    const selectedFileRef = ref(storage, `images/${selectedFile.name + v4()}`);
    uploadBytes(selectedFileRef, selectedFile).then(() => {
      alert("File uploaded");
    });
  };

  const handleCreateFile = () => {
    console.log('Created file:', fileName);
  };

  const handleCreateFolder = () => {
    console.log('Created folder:', folderName);
    setIsCreateFolderModalOpen(false); // Close the modal
  };

  return (
    <nav className='flex items-center justify-between py-10 space-x-9 bg-white'>
      <h1 className='font-bold space-x-10'>Root</h1>
      <ul className='flex space-x-4 ml-auto'>
        <li className='nav-item'>
          <button htmlFor="file-upload" className="rounded-sm font-bold bg-blue-500 text-white px-4 py-2 cursor-pointer" onClick={handleFileUpload}>
            <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload File
            <input type="file" id="file-upload" className="hidden" onChange={(e) => setSelectedFile(e.target.files[0])} />
          </button>
        </li>
        <li className='nav-item'>
          <button className='rounded-sm font-bold bg-green-500 text-white px-4 py-2' onClick={handleCreateFile}>
            <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create File
          </button>
        </li>
        <li className='nav-item'>
          <button className='rounded-sm font-bold bg-yellow-500 text-white px-4 py-2' onClick={handleCreateFolder}>
            <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
          </button>
        </li>
      </ul>
    </nav>
  );
}
