import { StyleSheet } from 'react-native'
import { height, width } from '../../../config/constants'

export const styles = StyleSheet.create({
    headerSection: {
        width: width,
        height: height * 0.15,
        borderBottomWidth: 1,
        elevation: 2,
        padding: 16,
        paddingBottom: 0,
        borderRadius: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleSection: {
        gap: 4,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.5,
        fontWeight: "bold"
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
})