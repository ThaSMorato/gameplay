import React from "react";
import {
    Image,
    View
} from "react-native";
import { styles } from "./styles";



export const GuildIcon = () => {

    const uri = "https://api.multiavatar.com/Discord.png"

    return (
        <Image 
            style={styles.image} 
            source={{ uri }}
            resizeMode="cover"
        />
        
    );
}