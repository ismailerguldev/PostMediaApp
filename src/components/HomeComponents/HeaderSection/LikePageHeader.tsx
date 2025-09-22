import { View, Text } from 'react-native'
import React from 'react'
import { HBox, VBox } from '../../GeneralComponents/BoxComponents'
import { styles } from './styles'
import { Icons } from '../../../assets/icons/icons'

const LikePageHeader = () => {
    return (
        <>
            <VBox style={[styles.titleSection]}>
                <Text style={[styles.mainTitle]}>Liked Posts</Text>
            </VBox>
        </>
    )
}

export default LikePageHeader