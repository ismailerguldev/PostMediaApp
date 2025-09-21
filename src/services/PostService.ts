import { config } from "../config/config"
import { IPost } from "../models/Post"

const getPosts = async () => {
    let posts: IPost[] = []
    await fetch(config.BASE_URL)
        .then((res) => res.json())
        .then((data: IPost[]) => posts = [...data])
    return posts
}
export { getPosts }