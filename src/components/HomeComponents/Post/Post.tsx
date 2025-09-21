import { View, Text } from 'react-native'
import React from 'react'
import { IPost } from '../../../models/Post'

const Post = ({ post }: { post: IPost }): React.JSX.Element => {
    return (
        <View>
            <Text>{post.title}</Text>
        </View>
    )
}

export default Post