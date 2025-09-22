import { StyleProp, View, ViewStyle } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const Divider = ({ size, style, horizontal }: { size: "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%", style?: StyleProp<ViewStyle>, horizontal: boolean }): React.JSX.Element => {
    const border: string = useTheme().colors.border
    return (
        horizontal ? <View style={[{ width: size, borderColor: border, borderBottomWidth: 1, marginTop: 8, }, style]} />
            : <View style={[{ height: size, width: 1, backgroundColor: border, alignSelf: "center" }, style]} />
    )
}

export default Divider