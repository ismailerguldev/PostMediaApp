import { View, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

export const HBox = ({ children, style }: { children: React.ReactNode, style?: StyleProp<ViewStyle> }): React.JSX.Element => {
    return (
        <View style={[{ flexDirection: "row" }, style]}>
            {children}
        </View>
    )
}
export const VBox = ({ children, style }: { children: React.ReactNode, style?: StyleProp<ViewStyle> }): React.JSX.Element => {
    return (
        <View style={[{ flexDirection: "column" }, style]}>
            {children}
        </View>
    )
}