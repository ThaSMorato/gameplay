import React from "react";
import { 
    Image,
    View 
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from "./styles";
import { defaultTheme } from "../../global/styles/theme";

type IAvatarProps = {
    photo: string;
}

export const Avatar = ({photo} : IAvatarProps) => {
    const {secondary50, secondary70} = defaultTheme.colors
    return (
        <LinearGradient 
            style={styles.container} 
            colors={[secondary50, secondary70]}
        >
            <Image
                source={{uri: photo}}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}