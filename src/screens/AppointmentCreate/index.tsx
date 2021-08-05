import React from 'react';
import { Text, 
    View, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { defaultTheme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import { styles } from './styles';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import ModalView from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { IGuild } from '../../components/Guild';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENT } from '../../configs';
import { useNavigation } from '@react-navigation/native';

export const AppointmentCreate = () => {

    const [category, setCategory] = React.useState<string>('');
    const [openGuildsModal, setOpenGuildsModal] = React.useState<boolean>(false);
    const [guild, setGuild] = React.useState<IGuild>({} as IGuild);

    const [day, setDay] = React.useState<string>('');
    const [month, setMonth] = React.useState<string>('');
    const [hour, setHour] = React.useState<string>('');
    const [minute, setMinute] = React.useState<string>('');
    const [description, setDescription] = React.useState<string>('');

    const navigation = useNavigation();

    const handleOpenGuildsModal = () => {
        setOpenGuildsModal(true);
    }

    const handleCloseGuildsModal = () => {
        setOpenGuildsModal(false);
    }

    const handleGuildSelected = (guildSelected: IGuild) => {
        setGuild(guildSelected);
        setOpenGuildsModal(false);
    }

    const handleCategorySelect = (categoryId: string) => {
        setCategory(categoryId);
    }

    const handleSave = async () => {
        const newAppointment = {
            id : uuid.v4(),
            guild,
            category,
            date: `${day}/${month} as ${hour}:${minute}h`,
            description,
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);

        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(COLLECTION_APPOINTMENT, JSON.stringify([...appointments, newAppointment]));

        navigation.navigate('Home');
    }

  return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Background>
                <ScrollView>
                    <Header 
                        title={"Agendar Partida"}
                    />

                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18}]} >
                        Categoria
                    </Text>

                    <CategorySelect 
                        hasCheckBox
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />

                    <View style={styles.form}>

                        <RectButton onPress={handleOpenGuildsModal}>
                            <View style={styles.select}>
                                
                                {
                                    guild.id ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> :  <View style={styles.image} />

                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        { 
                                            guild.name ? guild.name : "Selecione um servidor"
                                        }
                                    </Text>
                                </View>
                                <Feather 
                                    name="chevron-right"
                                    color={defaultTheme.colors.heading}
                                    size={18}
                                />
                                
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, {marginBottom : 12}]}>
                                    Dia e mes
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setDay}
                                    />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput 
                                        onChangeText={setMonth}
                                        maxLength={2}
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, {marginBottom : 12}]}>
                                    Hora e minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setHour}
                                    />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMinute}
                                    />
                                </View>
                            </View>
                            
                        </View>

                        <View style={[styles.field, {marginBottom: 12}]}>
                            <Text style={styles.label}>
                                Descricao
                            </Text>
                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>
                        <TextArea 
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription}
                        /> 

                        <View style={styles.footer}>
                            <Button title="Agendar" onPress={handleSave}/>
                        </View>
                    </View>
                </ScrollView>
            </Background>
            <ModalView 
                closeModal={handleCloseGuildsModal}
                visible={openGuildsModal}
            >
                <Guilds 
                    handleGuildSelected={handleGuildSelected}
                />
            </ModalView>
        </KeyboardAvoidingView>
  )
}
