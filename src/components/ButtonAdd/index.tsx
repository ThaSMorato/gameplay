import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import { defaultTheme } from "../../global/styles/theme";



export const ButtonAdd = ({...rest} : RectButtonProps) => {
    return (
        <RectButton {...rest} style={styles.container}>
            <MaterialCommunityIcons 
                name="plus"
                color={defaultTheme.colors.heading}
                size={24}
            />
        </RectButton >
    )
}