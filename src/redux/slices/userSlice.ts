import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../models/Post'
import { getLikeds, saveLikeds } from '../../services/PostCacheService'
import { getPosts } from '../../services/PostService'

export interface IUserState {
    username: string,
    liked: IPost[],
    allPosts: IPost[],
    isLoading: "pending" | "fulfilled" | "rejected" | "empty"
}

const initialState: IUserState = {
    username: "",
    liked: [],
    allPosts: [],
    isLoading: "empty"
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
    extraReducers: (builder) => {
        builder
            .addCase(saveLikeds.pending, (state, action) => {
                state.isLoading = "pending"
            })
            .addCase(saveLikeds.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.liked = [...action.payload]
                state.isLoading = "fulfilled"
            })
            .addCase(saveLikeds.rejected, (state, action) => {
                state.isLoading = "rejected"
            })
            .addCase(getLikeds.pending, (state, action) => {
                state.isLoading = "pending"
            })
            .addCase(getLikeds.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.liked = [...action.payload]
                state.isLoading = "fulfilled"
            })
            .addCase(getLikeds.rejected, (state, action) => {
                state.isLoading = "rejected"
            })
            .addCase(getPosts.pending, (state, action) => {
                state.isLoading = "pending"
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.isLoading = "fulfilled"
                state.allPosts = [...action.payload]
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = "rejected"
            })
    }
})

export const { setUsername, setLikeds } = userSlice.actions

export default userSlice.reducer