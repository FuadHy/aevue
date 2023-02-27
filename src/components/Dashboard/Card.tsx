import React from 'react'

interface props {
    image: any;
    title: string;
    value: string;
}

export default function Card({image, title, value}: props) {
  return (
    <div className='flex flex-1 bg-white p-4 rounded-md items-center justify-between'>
        <div className='flex flex-col gap-[3px]'>
            <h4 className='text-black font-bold text-sm font-sans'>{title}</h4>
            <h2 className='text-black text-[22px] font-bold font-sans'>{value}</h2>
        </div>
        <img src={image} alt={title} className='w-[80px] object-fit' />
    </div>
  )
}
