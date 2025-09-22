import { Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { theme } from '../../../config/constants'
import { Icons } from '../../../assets/icons/icons'
import { HBox, VBox } from '../../GeneralComponents/BoxComponents'
import HomePageHeader from './HomePageHeader'
import LikePageHeader from './LikePageHeader'
import Divider from '../../GeneralComponents/Divider'

const HeaderSection = ({ route }: { route: string }): React.JSX.Element => {
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
            {
                route === "Home" && <HomePageHeader />
            }
            {
                route === "Likes" && <LikePageHeader />
            }
        </HBox>
    )
}

export default HeaderSection