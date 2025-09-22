import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../models/Post'
import { getLikeds, saveLikeds } from '../../services/PostCacheService'
import { getPosts } from '../../services/PostService'

export interface IUserState {
    username: string,
    liked: IPost[],
    allPosts: IPost[],
    isFetchingPosts: "pending" | "fulfilled" | "rejected" | "empty",
    isLoadingLikes: "pending" | "fulfilled" | "rejected" | "empty"
}

const initialState: IUserState = {
    username: "",
    liked: [],
    allPosts: [],
    isFetchingPosts:"empty",
    isLoadingLikes:"empty"
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
                state.isLoadingLikes = "pending"
            })
            .addCase(saveLikeds.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.liked = [...action.payload]
                state.isLoadingLikes = "fulfilled"
            })
            .addCase(saveLikeds.rejected, (state, action) => {
                state.isLoadingLikes = "rejected"
            })
            .addCase(getLikeds.pending, (state, action) => {
                state.isLoadingLikes = "pending"
                console.log("şu anda pending")
            })
            .addCase(getLikeds.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.liked = [...action.payload]
                state.isLoadingLikes = "fulfilled"
                console.log("şu an çekme bitti")
            })
            .addCase(getLikeds.rejected, (state, action) => {
                state.isLoadingLikes = "rejected"
                console.log("getlikeds rejected oldu")
            })
            .addCase(getPosts.pending, (state, action) => {
                state.isFetchingPosts = "pending"
                console.log("postları çekme başladı")
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.isFetchingPosts = "fulfilled"
                state.allPosts = [...action.payload]
                console.log("postları çekme bitti")
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isFetchingPosts = "rejected"
                console.log("postları çekme reddedildi")
            })
    }
})

export const { setUsername, setLikeds } = userSlice.actions

export default userSlice.reducer