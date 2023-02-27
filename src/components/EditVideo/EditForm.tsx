import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import { Video } from '../../dataTypes'
import { useAppDispatch, useAppSelector } from '../../ReduxStore/hooks'
import { editVideo } from '../../ReduxStore/videoManager/videoManagerSlice'

const EditBox = ({title, value, setValue} : {title: string, value: string | undefined, setValue: any}) => {
    return (
        <div className='w-full flex flex-col gap-2 h-fit'>
            <p className='text-[#000000] font-bold font-sans text-[13px]'>{title}</p>
            <input type={'text'} value={value} onChange={e => setValue(e.target.value)}
                className='border-[1px] border-[#00000060] rounded-md p-1 text-[#000000] text-[13px] pl-2 overflow-hidden' />
        </div>
    )
}

export default function EditForm({id}: {id: string | undefined}) {
    const [title, setTitle] = React.useState<string>('')
    const [subject, setSubject] = React.useState<string>('')
    const [category, setCategory] = React.useState<string>('')
    const [primers, setPrimers] = React.useState<string>('')
    const [video, setVideo] = useState<Video>()
    const selectedVideo = useAppSelector(state => state.video.value).find(v => v.id === id)
    const dispatch = useAppDispatch()
    const navigation = useNavigate()


    useEffect(() => {
        setVideo(selectedVideo)
        setTitle(selectedVideo?.title || '')
        setSubject(selectedVideo?.subject || '')
        setCategory(selectedVideo?.category || '')
    }, [selectedVideo])

    const saveChanges = () => {
        if(video){
            console.log('dd')
            dispatch(editVideo({id, title, subject, category}))
            navigation(-1)
        }
    }

  return (
    <div className='flex-[3] flex flex-col shadow-sm p-4 gap-4 bg-white'>
        <div className='rounded-md grid grid-cols-2 gap-x-4 gap-y-3'>
            <EditBox title="Video Title" value={title} setValue={setTitle} />
            <EditBox title="Subject" value={subject} setValue={setSubject} />
            <EditBox title="Category" value={category} setValue={setCategory} />
            <EditBox title="Primers" value={primers} setValue={setPrimers} />
            <EditBox title="Add Hashtags" value={''} setValue={() => ''} />
            <EditBox title="Current Hashtags" value={''} setValue={() => ''} />
        </div>
        <div className='flex flex-1 flex-col'>
            <div className='w-full flex items-center gap-2'>
                <p className='text-black text-[14px] font-bold font-sans'>Levels</p>
                <div className='h-[1px] bg-[#00000060] w-full'></div>
            </div>
            <div className='rounded-md grid grid-cols-2 gap-x-4 gap-y-3 mt-4'>
                <EditBox title="Level 1" value={'Lorem ipsum'} setValue={() => ''} />
                <EditBox title="Level 2" value={'Lorem ipsum'} setValue={() => ''} />
                <EditBox title="Level 3" value={'Lorem ipsum'} setValue={() => ''} />
                <EditBox title="Level 4" value={'Lorem ipsum'} setValue={() => ''} />
            </div>
        <div className='flex w-full items-center gap-3 mt-auto'>
            <div onClick={() => {
                navigation(-1)
            }} className='w-full border-active border-2 p-1 rounded-md flex items-center justify-center mt-[20px] cursor-pointer'>
                <p className='text-active text-[15px]'>Cancel Edit</p>
            </div>
            <div onClick={() => {
                saveChanges()
            }} className='w-full bg-active p-1 rounded-md flex items-center justify-center mt-[20px] cursor-pointer'>
                <p className='text-white text-[15px]'>Save Changes</p>
            </div>
        </div>
        </div>
    </div>
  )
}
