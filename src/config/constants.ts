import { DefaultTheme } from "@react-navigation/native";
import { Dimensions, ScaledSize } from "react-native";

export const { width, height }: ScaledSize = Dimensions.get("screen")
export const theme: ReactNavigation.Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#f4f4f4",
        primary: "#aaa",
        text: "#222",
        border: "#e0e0e0",
        card: "#ffffff"
    },
}