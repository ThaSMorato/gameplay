import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, IGuild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

import { styles } from './styles';

type IGuilds = {
    handleGuildSelected: (guild: IGuild) => void;
}

export const Guilds = ({ handleGuildSelected } : IGuilds) => {

    const [guilds, setGuilds] = React.useState<IGuild[]>([]);
    const [loading, setLoading] = React.useState(true);

    const fetchGuilds = async () => {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);

        setLoading(false);
    }

   React.useEffect(() => {
    fetchGuilds();
   }, [])

  return (
    <View style={styles.container} >
        { 
        loading ? 
        <Load /> :
        <FlatList 
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Guild 
                    data={item} 
                    onPress={() => handleGuildSelected(item)}    
                /> 
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered={true} />}
            showsVerticalScrollIndicator={false}
            style={styles.guilds}
            contentContainerStyle={{paddingBottom: 68, paddingTop: 103 }}
            ListHeaderComponent={() => <ListDivider isCentered={true} />}
        />
        }
    </View>
  );
}
