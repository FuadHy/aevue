import React from 'react'
import { useParams } from 'react-router-dom'
import EditForm from '../components/EditVideo/EditForm'
import ProfileCard from '../components/EditVideo/ProfileCard'
import { Video } from '../dataTypes'

export default function Edit() {
  const params = useParams()
  return (
    <div className='flex flex-col flex-1 gap-2 p-7'>  
        <h1 className='text-[#000000] font-bold font-sans'>Video Edit</h1>
        <div className='flex w-full gap-3'>
          <ProfileCard id={params.id}/>
          <EditForm id={params.id}/>
        </div>
    </div>
  )
}
