import React from 'react';
import * as Link from 'expo-linking';
import { Alert, FlatList, ImageBackground, Text, View, Share, Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons';
import { defaultTheme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import DiscordImg from "../../assets/discord.png";
import { useRoute } from '@react-navigation/native';
import { IAppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { Load } from '../../components/Load';

type IRouteParams = {
    guildSelected: IAppointmentProps
}

type IGuildWidget = {
    id : string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export const AppointmentDetails = () => {

    const [widget, setWidget] = React.useState<IGuildWidget>({} as IGuildWidget)
    const [loading, setLoading] = React.useState(true);
    const routes = useRoute();

    const { guildSelected } = routes.params as IRouteParams;

    const fetchGuildInfo = async () => {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
            
        } catch (err) {
            Alert.alert('Verifique as confs do server');
        } finally {
            setLoading(false);
        }
    }

    const handleShareInvitation = () => {
        const message = Platform.OS === 'ios' ? 
        `Junte-se a ${guildSelected.guild.name}` : 
        widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        })
    }

    const handleOpenGuild = () => {
        Link.openURL(widget.instant_invite);
    }

    React.useEffect(() => {
        fetchGuildInfo();
    }, [])
    

  return (
      <Background>
          <Header 
            title={"Detalhes"}
            action={
                widget.instant_invite && guildSelected.guild.owner &&
                <BorderlessButton onPress={handleShareInvitation}>
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
                    { guildSelected.guild.name }
                </Text>

                <Text style={styles.subtitle}>
                    { guildSelected.description }
                </Text>
              </View>
          </ImageBackground>    

          {
              loading ? 
                <Load />
              :
              <>
                <ListHeader
                    title="Jogadores"
                    subtitle={`Total ${widget.members? widget.members.length : 0}`}
                />

                <FlatList 
                    data={widget.members}
                    keyExtractor={item => item.id} 
                    renderItem={({item}) => (
                        <Member 
                            data={item}
                        />
                    )}
                    style={styles.members}
                    ItemSeparatorComponent={() => <ListDivider isCentered />}
                />
              </>
          }

            { 
                widget.instant_invite && guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon
                        icon={DiscordImg}
                        onPress={handleOpenGuild}
                        title="Entrar na Partida"
                    />
                </View>
            }
      </Background>
  )
}
