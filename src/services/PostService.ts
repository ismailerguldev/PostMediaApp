import { createAsyncThunk } from "@reduxjs/toolkit"
import { config } from "../config/config"
import { IComment, IPost } from "../models/Post"
export const PostService = async <T>({ endpoint, options }: { endpoint: string, options?: RequestInit }): Promise<T> => {
    try {
        const res: Response = await fetch(`${config.BASE_URL}${endpoint}`, options)
        if (!res.ok) {
            const ErrorText: string = await res.text()
            throw new Error(`HTTP Status Error! Please check the server!\nHTTP Status: ${res.status}\nError: ${ErrorText}`)
        }
        const data: T = await res.json()
        return data
    } catch (error) {
        if (error instanceof Error) {
            console.error(`API Error! Please check the API and Post Service.\nError Message: ${error.message}\nEndpoint:${endpoint}`)
            throw error
        } else {
            console.error(`Unknown API Error! Please check the API and Post Service.\nError Message: ${error}`)
            throw error
        }
    }
}
// const getPosts = async (): Promise<IPost[]> => {
//     return PostService<IPost[]>({ endpoint: "/" })
// }
const getPosts = createAsyncThunk<IPost[], void>(
    'getPosts',
    async () => {
        const posts = await PostService<IPost[]>({ endpoint: "/" })
        return posts.map((post) => (
            {
                ...post,
                likeCount: 0,
                commentCount: 0
            }
        ))
    }
)
const getComments = async ({ post_id }: { post_id: number }): Promise<IComment[]> => {
    return PostService<IComment[]>({ endpoint: `${post_id}/comments` })
}
export { getPosts, getComments }