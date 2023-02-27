import React from 'react'
import profile from '../../assets/images/profile.jpg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Video } from '../../dataTypes';
import { useAppSelector } from '../../ReduxStore/hooks';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export default function ProfileCard({id}: {id: string | undefined}) {
    const video: Video | undefined = useAppSelector(state => state.video.value).find(v => v.id === id);

  return (
    <div className='bg-white rounded-md flex flex-1 flex-col shadow-sm p-4 gap-4'>
        <div className='flex items-center gap-2'>
            <img className='w-10 h-10 rounded-full object-cover' src={profile} alt="profile" />
            <div className='flex flex-col gap-1'>
                <h3 className='text-black text-sm font-sans font-bold'>By Chris evans</h3>
                <p className='text-black text-sm font-sans'>@chrisevans</p>
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <CalendarMonthIcon  style={{fontSize: 18}}/>
                <p className='text-sm text-black font-sans'>Aprill 29, 2002</p>
            </div>
            <div className='flex items-center gap-3'>
                <AccessTimeIcon  style={{fontSize: 18}}/>
                <p className='text-sm text-black font-sans'>9:24 am</p>
            </div>
        </div>
        <div className='w-full h-[300px] rounded-md relative flex items-center justify-center overflow-hidden'>
            <img className='w-full h-full object-cover' src={video?.thumbnail} alt="video thunmbnail"/>
            <div className='w-[60px] h-[60px] rounded-full bg-[#ffffff95] flex items-center justify-center absolute'>
                <PlayArrowIcon  style={{fontSize: 35, color: '#ffffff'}}/>
            </div>
        </div>
        <div className='flex w-full items-center justify-around'>
            <div className='flex items-center gap-1'>
                <FavoriteBorderIcon  style={{fontSize: 20, color: '#000000'}}/>
                <p className='text-black text-sm'>{video?.reactions.likes}</p>
            </div>
            <div className='flex items-center gap-1'>
                <CommentIcon  style={{fontSize: 20, color: '#000000'}}/>
                <p className='text-black text-sm'>{video?.reactions.comment}</p>
            </div>
            <div className='flex items-center gap-1'>
                <PlayCircleIcon  style={{fontSize: 20, color: '#000000'}}/>
                <p className='text-black text-sm'>{video?.reactions.views}</p>
            </div>
        </div>
        <div className='w-full border-active border-2 p-1 rounded-md flex items-center justify-center mt-[20px]'>
            <p className='text-active text-[15px]'>Delete Video</p>
        </div>
    </div>
  )
}
