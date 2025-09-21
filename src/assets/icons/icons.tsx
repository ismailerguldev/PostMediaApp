import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ColorValue, StyleProp, View, ViewStyle } from 'react-native';
type Props = {
    size: number,
    color: ColorValue,
    style?: StyleProp<ViewStyle>
}
export const Icons = {
    Bell: (props: Props) =>
        (<View style={props.style}><FontAwesome5 name="bell" size={props.size} color={props.color} /></View>),
    Like: (props: Props) =>
        (<View style={props.style}><Feather name="heart" size={props.size} color={props.color} /></View>),
    Comment: (props: Props) =>
        (<View style={props.style}><FontAwesome name="comment-o" size={props.size} color={props.color} /></View>)
}