import React from "react";
import {
    Text,
    Image,
    View,
    ImageSourcePropType,
} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";


type IButtonProps = RectButtonProps & {
    title: string;
    icon: ImageSourcePropType
}

export const ButtonIcon = ({title, icon, activeOpacity, ...rest} : IButtonProps) => {
    return (
        <RectButton 
            style={styles.container}
            activeOpacity={activeOpacity}
            {...rest}
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
        </RectButton>
    )
}