import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../models/Post";
import AsyncStorage from "@react-native-async-storage/async-storage"
export const saveLikeds = createAsyncThunk<IPost[], IPost[]>(
    'likeds',
    async (likedPosts) => {
        await AsyncStorage.setItem("likedPosts", JSON.stringify(likedPosts))
        return likedPosts
    }
)
export const getLikeds = createAsyncThunk<IPost[]>(
    'getLikeds',
    async () => {
        const response = await AsyncStorage.getItem("likedPosts")
        if (!response) {
            return []
        }
        return JSON.parse(response)
    }
)