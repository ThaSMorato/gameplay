import React from "react";
import {
    View,
    FlatList,
    Text
} from "react-native";
import { Appointments } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export const Home = () => {

    const [category, setCategory] = React.useState<string>('');

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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            
            <CategorySelect  
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            

            <View style={styles.content}>
                <ListHeader 
                    title="Partidas Agendadas"
                    subtitle="Total 6"
                />
                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => ( <Appointments data={item} />)}
                    style={styles.matches}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </View>
    );
}