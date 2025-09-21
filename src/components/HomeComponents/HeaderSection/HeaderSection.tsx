import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { theme } from '../../../config/constants'
import { Icons } from '../../../assets/icons/icons'
import { HBox, VBox } from '../../GeneralComponents/BoxComponents'

const HeaderSection = () => {
    return (
        <HBox style={
            [
                styles.headerSection,
                {
                    backgroundColor: theme.colors.card,
                    borderColor: theme.colors.border,
                }
            ]
        }>
            <VBox style={[styles.titleSection]}>
                <Text style={[
                    styles.subTitle
                ]}>Hello, username!</Text>
                <Text style={[
                    styles.mainTitle
                ]}>Z-Post Mobile</Text>
            </VBox>
            <HBox>
                <Icons.Bell color={"black"} size={24} />
            </HBox>
        </HBox>
    )
}

export default HeaderSection