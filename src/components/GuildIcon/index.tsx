import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    Image
} from "react-native";

import { defaultTheme } from "../../global/styles/theme";
import { styles } from "./styles";



export const GuildIcon = () => {

    const uri = "https://api.multiavatar.com/Discord.png";

    const { secondary50, secondary70 } = defaultTheme.colors;

    return (
        <LinearGradient
            style={styles.guildIconContainer}
            colors={[secondary50, secondary70]}            
        >
            <Image 
                style={styles.image} 
                source={{ uri }}
                resizeMode="cover"
            />
        </LinearGradient>
        
    );
}