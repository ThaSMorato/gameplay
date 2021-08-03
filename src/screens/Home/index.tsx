import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    FlatList,
    Text
} from "react-native";
import { Appointments } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export const Home = () => {

    const [category, setCategory] = React.useState<string>('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: "Eh hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendarios',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: "Eh hoje que vamos chegar ao challenger sem perder uma partida da md10"
        }
    ]

    const handleCategorySelect = (categoryId: string) => {
        categoryId === category? setCategory('') : setCategory(categoryId);
    }

    const handleAppointmentDetails = () => {
        navigation.navigate("AppointmentDetails");
    }

    const handleAppointmentCreate = () => {
        navigation.navigate("AppointmentCreate");
    }

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
            

           
                <ListHeader 
                    title="Partidas Agendadas"
                    subtitle="Total 6"
                />
                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => ( <Appointments 
                        data={item} 
                        onPress={handleAppointmentDetails} 
                    />)}
                    style={styles.matches}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider />}
                    contentContainerStyle={{paddingBottom: 69}}
                />
        </Background>
    );
}