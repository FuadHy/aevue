import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import profile from '../assets/images/profile.jpg'
import Constants from '../constants'

export default function Header() {
  return (
    <div className='flex justify-between items-center bg-[#ffffff] shadow-sm p-2 z-10'>
        <h4 className='text-lg text-[#000000] font-bold pl-4'>{Constants.CompanyName}</h4>
        <div className='flex justify-center items-center gap-9'>
            <div className='flex items-center w-[300px] relative bg-background p-1 rounded-md pr-2'>
                <input type='search' placeholder='Search here' className='w-full h-full text-[#00000095] text-sm pl-2 pr-6 bg-background outline-none border-none'/>
                <SearchIcon style={{color: '#00000095'}} />
            </div>
            <div className='flex items-center justify-center gap-2'>
                <img src={profile} alt="" className='w-[40px] h-[40px] object-cover rounded-full bg-background' />
                <ExpandMoreIcon style={{color: '#000000', fontSize: 28}} />
            </div>
        </div>
    </div>
  )
}
