import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        elevation: 2,
        padding: 8,
        borderRadius: 8,
        gap: 8,
    },
    titleSection: {
        gap: 16,
        alignItems: "center"
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        elevation: 4
    },
    username: {
        fontSize: 16,
        opacity: 0.6
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    actionIcons: {
        opacity: 0.5,
        padding: 8,
        borderRadius: 8, 
        borderWidth: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        gap: 8,
    }
})