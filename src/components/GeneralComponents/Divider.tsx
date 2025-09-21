import { View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const Divider = ({ width }: { width: "50%" | "80%" | "100%" }): React.JSX.Element => {
    const border: string = useTheme().colors.border
    return (
        <View style={{ width: width, borderColor: border, borderBottomWidth: 1, marginTop: 5, }} />
    )
}

export default Divider