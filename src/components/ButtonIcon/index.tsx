import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    ImageSourcePropType,
    TouchableOpacityProps
} from "react-native";


import { styles } from "./styles";


type IButtonProps = TouchableOpacityProps & {
    title: string;
    icon: ImageSourcePropType
}

export const ButtonIcon = ({title, icon, activeOpacity} : IButtonProps) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={activeOpacity}
        >
            <View style={styles.iconWrapper}>
                <Image 
                    source={icon}
                    style={styles.icon}
                 />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}