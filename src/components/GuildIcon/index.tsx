import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    Image
} from "react-native";
import { CDN_IMAGE } from "../../configs";

import DiscordSvg from '../../assets/discord.svg';

import { defaultTheme } from "../../global/styles/theme";
import { styles } from "./styles";

type IGuilIconProps = {
    guildId: string,
    iconId: string | null,
}

export const GuildIcon = ({guildId, iconId} : IGuilIconProps) => {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;


    const { secondary30, discord } = defaultTheme.colors;

    return (
        <LinearGradient
            style={styles.guildIconContainer}
            colors={[secondary30, discord]}            
        >
            {
                iconId ? 
                <Image 
                    style={styles.image} 
                    source={{ uri }}
                    resizeMode="cover"
                />
                : <DiscordSvg 
                    width={40}
                    height={40}
                />
            }
        </LinearGradient>
        
    );
}