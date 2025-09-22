export interface IPost {
    userId: string
    id: number
    title: string
    body: string
    likeCount?: number
    commentCount?: number
}
export interface IComment {
    postId: string
    id: number
    name: string
    email: string
    body: string
}