import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { defaultTheme } from '../../global/styles/theme';
import { styles } from "./styles";

type IBackgroundProps = {
    children: React.ReactNode;
}

export const Background = ({children} : IBackgroundProps) => {
    const {secondary100, secondary80} = defaultTheme.colors
    
    return (
        <LinearGradient 
            style={styles.container} 
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    )
}