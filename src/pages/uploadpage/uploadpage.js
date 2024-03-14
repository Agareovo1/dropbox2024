import React from 'react'
import Upload from '../../components/upload/upload'
import HomeComponents from '../../components/folder/homecomponents'
import { useState } from 'react';
import CreateFolder from '../../components/folder/createfolder';

export default function Uploadpage() {

const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  return (
    <div className='flex flex-col'>
      {
        JSON.stringify(isCreateFolderModalOpen)
      }

      {
        isCreateFolderModalOpen && (
          <CreateFolder
          setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}
          />
        )
      }
      <Upload setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
      <HomeComponents/>
    </div>
  )
}
