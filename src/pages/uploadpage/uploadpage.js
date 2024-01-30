import React from 'react'
import Upload from '../../components/upload/upload'
import HomeComponents from '../../components/folder/homecomponents'

export default function uploadpage() {
  return (
    <div className='flex flex-col'>
      <Upload/>
      <HomeComponents/>
    </div>
  )
}
