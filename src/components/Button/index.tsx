import React from "react";
import {
    Text,
    ImageSourcePropType,
} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";


type IButtonProps = RectButtonProps & {
    title: string;
}

export const Button = ({title, activeOpacity, ...rest} : IButtonProps) => {
    return (
        <RectButton 
            style={styles.container}
            activeOpacity={activeOpacity}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}