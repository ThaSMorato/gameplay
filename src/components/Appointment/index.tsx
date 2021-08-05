import React from "react";
import {
    View,
    FlatList,
    Text
} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import { styles } from "./styles";
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { defaultTheme } from "../../global/styles/theme";
import { IGuild } from "../Guild";



export type IAppointmentProps = {
    id: string;
    guild: IGuild;
    category: string;
    date: string;
    description: string;
}

type IAppointmentFunctionProps = RectButtonProps & {
    data: IAppointmentProps;
}

export const Appointments = ({data, ...rest} : IAppointmentFunctionProps) => {


    const [ category ] = categories.filter(item => item.id === data.category);

    const { owner } = data.guild;

    const { primary, on } = defaultTheme.colors;
    return (
        <RectButton 
            {...rest}
        >
            <View style={styles.container}>
                
                <GuildIcon 
                    guildId={data.guild.id}
                    iconId={data.guild.icon}
                />
                
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { data.guild.name }
                        </Text>

                        <Text style={styles.category}>
                            { category.title }
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.playersInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg 
                                fill={ owner ? primary : on }
                                />

                            <Text style={[ styles.player, {color : owner ? primary : on}]}>
                                {owner ? "Anfitriao" : "Visitante"}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}