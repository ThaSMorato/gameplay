import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, IGuild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type IGuilds = {
    handleGuildSelected: (guild: IGuild) => void;
}

export const Guilds = ({ handleGuildSelected } : IGuilds) => {

    const guilds = [
        {
            id: '1',
            name: "Lendarios",
            icon: "imgpng",
            owner: true
        }
    ]

  return (
    <View style={styles.container} >
        <FlatList 
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Guild 
                    data={item} 
                    onPress={() => handleGuildSelected(item)}    
                /> 
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            showsVerticalScrollIndicator={false}
            style={styles.guilds}
        />
    </View>
  );
}
