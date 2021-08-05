import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React from "react";
import {
    View,
    FlatList,
    Text
} from "react-native";
import { Appointments, IAppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Load } from "../../components/Load";
import { Profile } from "../../components/Profile";
import { COLLECTION_APPOINTMENT } from "../../configs";
import { styles } from "./styles";

export const Home = () => {

    const [category, setCategory] = React.useState<string>('');
    const [appointments, setAppointments] = React.useState<IAppointmentProps[]>([]);

    const [loading, setLoading] = React.useState<boolean>(true);

    const navigation = useNavigation();


    const handleCategorySelect = (categoryId: string) => {
        categoryId === category? setCategory('') : setCategory(categoryId);
    }

    const handleAppointmentDetails = (guildSelected : IAppointmentProps) => {

        navigation.navigate("AppointmentDetails", { guildSelected });
    }

    const handleAppointmentCreate = () => {
        navigation.navigate("AppointmentCreate");
    }

    const loadAppointments = async () => {
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);

        const appointmentsData: IAppointmentProps[] = storage ? JSON.parse(storage) : [];

        if(category) {
            setAppointments( appointmentsData.filter(appoint => appoint.category === category));
        } else {
            setAppointments( appointmentsData );
        }

        setLoading(false);
    }

    useFocusEffect(React.useCallback(() => {
        loadAppointments();
    }, [category]))

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            
            <CategorySelect  
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            

           {
               loading ? 
               <Load />
               :
               <>
                <ListHeader 
                    title="Partidas Agendadas"
                    subtitle={`Total ${appointments.length}`}
                />
                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => ( <Appointments 
                        data={item} 
                        onPress={() => handleAppointmentDetails(item)} 
                    />)}
                    style={styles.matches}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider />}
                    contentContainerStyle={{paddingBottom: 69}}
                />
               </>
           }
        </Background>
    );
}