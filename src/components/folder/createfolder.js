import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Make sure to import the icon you're using
import React, { useState } from 'react';

export default function CreateFolder({ setIsCreateFolderModalOpen }) {
  const [foldername, setFoldername] = useState('');

  const checkFolderAlreadyPresent = (name) => {
    // Logic to check if folder name is already present
    // This function can be implemented as needed
    return false; // Placeholder implementation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!foldername) {
      alert("Folder name cannot be empty");
      return;
    }
    if (foldername.length <= 3) {
      alert("Folder name must be at least 3 characters");
      return;
    }
    if (checkFolderAlreadyPresent(foldername)) {
      alert("Folder already present");
      return;
    }
    alert("Folder created: " + foldername);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
      <div className="md:w-1/2 bg-white rounded p-4">
        <div className="flex justify-between">
          <h4>Create Folder</h4>
          <button className="btn" onClick={() => setIsCreateFolderModalOpen(false)}>
            <FontAwesomeIcon icon={faTimes} className="text-black" size="sm" />
          </button>
        </div>
        <hr />
        <div className="flex flex-col items-center mt-3">
          <form className="w-full">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="folderName"
                placeholder="Folder Name"
                value={foldername}
                onChange={(e) => setFoldername(e.target.value)}
              />
            </div>
            <button className="btn btn-primary mt-5 w-full" onClick={handleSubmit}>Create Folder</button>
          </form>
        </div>
      </div>
    </div>
  );
}
