import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Video } from '../../dataTypes';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../../ReduxStore/hooks';
import { removeVideo } from '../../ReduxStore/videoManager/videoManagerSlice';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from "react-router-dom";

const TD = ({title}: {title: string}) => (
    <td className='p-3 font-bold font-sans text-sm'>{title}</td>
)

const TR = ({video, dispatch}: {video: Video, dispatch: any}) => (
    <tr>
        <td className='p-3 font-bold font-sans text-sm'>
            <div className='w-full h-[50px] rounded-md relative flex items-center justify-center overflow-hidden'>
                <img className='w-full h-full object-cover' src={video?.thumbnail} alt="video thunmbnail"/>
                <div className='w-[30px] h-[30px] rounded-full bg-[#ffffff95] flex items-center justify-center absolute'>
                    <PlayArrowIcon  style={{fontSize: 25, color: '#000000'}}/>
                </div>
            </div>
        </td>
        {[video.title, video.username, video.timestamp, video.reactions.views, video.reactions.comment, video.reactions.likes].map(td => (
            <td className='text-sm font-sans p-3'>{td}</td>
        ))}
        <td className='text-sm font-sans p-3'>
            <Link to={`edit/${video.id}`}><div className='cursor-pointer hover:scale-110 transition-all'><BorderColorIcon style={{color: '#1a76d2'}}/></div></Link>
        </td>
        <td className='text-sm font-sans p-3'>
            <div className='cursor-pointer hover:scale-110 transition-all' onClick={() => dispatch(removeVideo(video.id))}><DeleteIcon /></div>
        </td>
    </tr>
)

const columns: string[] = [
    'Thumbnail',
    'Video Title',
    'User name',
    'Upload Date',
    'Views',
    'Comments',
    'Likes',
    'Edit',
    'Delete'
]

export default function VideosTable() {
    const videos = useAppSelector((state) => state.video.value)
    const dispatch = useAppDispatch()
    console.log('vvvv', videos)
    const [search, setSearch] = React.useState<string>('')
    return (
        <div className='flex flex-col w-full bg-white rounded-md p-3'>
            <div className='flex items-center justify-between pb-3 border-b-[1px] border-solid border-b-[#00000090]'>
                <div className='flex items-center w-[350px] relative bg-background p-1 rounded-md pr-2'>
                    <input type='search' onChange={e => setSearch(e.target.value.toLocaleLowerCase())} placeholder='Search by title' className='w-full h-full text-black text-sm pl-2 pr-6 bg-background outline-none border-none'/>
                    <SearchIcon style={{color: '#000000'}} />
                </div>
                <select className='bg-background rounded-md p-2 text-sm'>
                    <option value="last7days">Last 7 Days</option>
                </select>
            </div>

            <table className='w-full border-none'>
                <thead className=''>
                    <tr>
                        {columns.map(column => (<TD key={column} title={column}/>))}
                    </tr>
                </thead>
                <tbody>
                    {videos.filter(v => new RegExp(search).test(v.title.toLocaleLowerCase())).map((video, i) => (<TR key={i} video={video} dispatch={dispatch}/>))}
                </tbody>
            </table>
    </div>
  )
}
