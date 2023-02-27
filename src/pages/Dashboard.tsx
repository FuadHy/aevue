import React from 'react'
import CardContainer from '../components/Dashboard/CardContainer'
import VideosTable from '../components/Dashboard/VideosTable'

export default function Dashboard(): React.ReactElement {
  return (
    <div className='flex flex-col flex-1 gap-2 p-7'>  
        <h1 className='text-[#000000] font-bold font-sans'>Dashboard</h1>
        <CardContainer />
        <h1 className='text-[#000000] font-bold font-sans mt-[20px]'>Videos</h1>
        <VideosTable />
    </div>
  )
}
