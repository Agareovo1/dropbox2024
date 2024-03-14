import React, { useState } from 'react';
import ShowItems from '../file/showitems';
import CreateFolder from '../folder/createfolder'; // Import the CreateFolder component

export default function HomeComponents() {
  const [folders, setFolders] = useState([]); // State to store created folders

  return (
    <div className='flex flex-col md:w-100 space-y-4 mb-4'>
      {/* Display the CreateFolder component */}
      <CreateFolder setIsCreateFolderModalOpen={() => { setFolders(folders); }} />

      {/* Displaying created folders with bold font */}
      <ShowItems title={"Created Folders"} items={folders} />

      {/* Other sections for created files and uploaded files */}
    </div>
  );
}
