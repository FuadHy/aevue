import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Video } from '../../dataTypes'
import type { RootState } from '../store'

interface VideoState {
    value: Video[]
}

// Define the initial state using that type
const initialState: VideoState =  {
    value : [
        {
            "title": "Newtons Candle",
            "timestamp": "2022-2-3T20:4:32.578",
            "thumbnail": "https://images.unsplash.com/photo-1670871137637-fe0782c32e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "contentType": "video",
            "category": "Inspiration",
            "subject": "Chemistry",
            "tags": ["placeholder"],
            "reactions": {
                "views": 12,
                "comment": 14,
                "likes": 50.0
            },
            "video": "https://edily-content-stream.s3.amazonaws.com/public/video/chemistry/reactions/MP4/69870220-8556-11ec-808b-a7fd420dd4bd.mp4",
            "height": 1920.0,
            "width": 1080.0,
            "username": "johndoe",
            "id": "69870220-8556-11ec-808b-a7fd420dd4bd",
            "duration": 60.0,
            "creatorID": "89fe5e88-0590-4c23-83d6-f8a963eaca6f",
        },
        {
            "title": "Newtons Candle",
            "timestamp": "2022-2-3T20:4:32.578",
            "thumbnail": "https://images.unsplash.com/photo-1670871137637-fe0782c32e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "contentType": "video",
            "category": "Inspiration",
            "subject": "Chemistry",
            "tags": ["placeholder"],
            "reactions": {
                "views": 12,
                "comment": 14,
                "likes": 50.0
            },
            "video": "https://edily-content-stream.s3.amazonaws.com/public/video/chemistry/reactions/MP4/69870220-8556-11ec-808b-a7fd420dd4bd.mp4",
            "height": 1920.0,
            "width": 1080.0,
            "username": "johndoe",
            "id": "69870220-8827-11ec-808b-a7fd420dd4bd",
            "duration": 60.0,
            "creatorID": "89fe5e88-0590-4c23-83d6-f8a963eaca6f"
        }
    ]
}

export const videoSlicer = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    removeVideo: (state, action: PayloadAction<string>) => {
        let newState = state.value.filter(video => video.id !== action.payload)
        state.value = newState
    },
    editVideo: (state, action: PayloadAction<{id: string | undefined, title: string, category: string, subject: string}>) => {
        let newState = state.value.map(video => {
            if(video.id === action.payload.id){
                video.title = action.payload.title
                video.category = action.payload.category
                video.subject = action.payload.subject
                return video
            }
            return video
        })
        state.value = newState
    },
  },
})

export const { removeVideo, editVideo } = videoSlicer.actions

// Other code such as selectors can use the imported `RootState` type
// export const seelectVideo = (state: RootState, ) => state.video.value

export default videoSlicer.reducer