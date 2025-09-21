import { StyleProp, View, ViewStyle } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const Divider = ({ width, style }: { width: "50%" | "80%" | "100%", style?: StyleProp<ViewStyle> }): React.JSX.Element => {
    const border: string = useTheme().colors.border
    return (
        <View style={[{ width: width, borderColor: border, borderBottomWidth: 1, marginTop: 5, }, style]} />
    )
}

export default Divider