import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ColorValue } from 'react-native';
export const Icons = {
    Bell: (props: { size: number, color: ColorValue }) => <FontAwesome5 name="bell" size={props.size} color={props.color} />
}