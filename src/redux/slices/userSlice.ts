import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../models/Post'

export interface IUserState {
    username: string,
    liked: IPost[]
}

const initialState: IUserState = {
    username: "",
    liked: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setLikeds: (state, action: PayloadAction<IPost[]>) => {
            state.liked = [...action.payload]
        }
    },
})

export const { setUsername, setLikeds } = userSlice.actions

export default userSlice.reducer