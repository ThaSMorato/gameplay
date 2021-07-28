import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons';
import { defaultTheme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import DiscordImg from "../../assets/discord.png";

export const AppointmentDetails = () => {

    const members = [
        {
            id: '1',
            username: 'CoNzY',
            avatar_url: 'https://api.multiavatar.com/Conzy.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Adenah',
            avatar_url: 'https://api.multiavatar.com/Adenah.png',
            status: 'offline'
        }
    ]

  return (
      <Background>
          <Header 
            title={"Detalhes"}
            action={
                <BorderlessButton>
                    <Fontisto 
                        name="share"
                        size={24}
                        color={defaultTheme.colors.primary}
                    />
                </BorderlessButton>
            }
          />

          <ImageBackground
            source={ BannerImg }
            style={styles.banner}
          >
              <View style={styles.bannerContent}>
                <Text style={styles.title}>
                    Lendarios
                </Text>

                <Text style={styles.subtitle}>
                    Eh hoje que vamos chegar ao challenger sem perder uma partida da md10
                </Text>
              </View>
          </ImageBackground>    

          <ListHeader
            title="Jogadores"
            subtitle="Total 3"
          />

          <FlatList 
            data={members}
            keyExtractor={item => item.id} 
            renderItem={({item}) => (
                <Member 
                    data={item}
                />
            )}
            style={styles.members}
            ItemSeparatorComponent={() => <ListDivider />}
          />

            <View style={styles.footer}>
                <ButtonIcon
                    icon={DiscordImg}
                    title="Entrar na Partida"
                />
            </View>
      </Background>
  )
}
