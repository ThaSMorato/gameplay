import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { GuildIcon } from '../GuildIcon';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { defaultTheme } from '../../global/styles/theme';

export type IGuild = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type IGuildProps = TouchableOpacityProps & {
    data: IGuild,
}

export const Guild = ({data, ...rest} : IGuildProps) => {


  return (
    <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        {...rest}
    >
        <GuildIcon />
        <View style={styles.content}>
            <View>
                <Text style={styles.title}>
                    {data.name}
                </Text>

                <Text style={styles.type}>
                    {data.owner ? 'Administrador' : 'Convidado'}
                </Text>
            </View>
        </View>
        <Feather 
            name="chevron-right"
            color={defaultTheme.colors.heading}
            size={24}
        />
    </TouchableOpacity>
  );
}
