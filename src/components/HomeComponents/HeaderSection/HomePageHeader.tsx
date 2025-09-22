import { View, Text } from 'react-native'
import React from 'react'
import { HBox, VBox } from '../../GeneralComponents/BoxComponents'
import { styles } from './styles'
import { Icons } from '../../../assets/icons/icons'

const HomePageHeader: React.FC = () => {
    return (
        <>
            <VBox style={[styles.titleSection]}>
                <Text style={[styles.subTitle]}>Hello, username!</Text>
                <Text style={[styles.mainTitle]}>Z-Post Mobile</Text>
            </VBox>
            <HBox>
                <Icons.Bell color={"black"} size={24} />
            </HBox>
        </>
    )
}

export default HomePageHeader