import React from 'react';
import ShowItems from '../file/showitems';

export default function HomeComponents() {
  const folders = ["New folder", "New folder 2"];
  const files = ["New file", "New file 2"];
  const uploaded = ["New file", "New file 2"];

  return (
    <div className='flex flex-col md:w-100 space-y-4 mb-4'>
      {/* Displaying created folders with bold font */}
      <ShowItems  title={"Created Folders"} items={folders} />

      {/* Displaying created files */}
      <ShowItems title={"Created Files"} items={files} />
      <ShowItems title={"Uploaded files"} items={uploaded} />
    </div>
  );
}
