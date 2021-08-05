import React from "react";
import { 
    Text, 
    View,
    Alert
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export const Profile = () => {
    const {user, singOut} = useAuth();

    const handleSingOut = () => {
        Alert.alert('Logout', 'Desja sair do gameplay?',
            [
                {
                    text: 'Nope',
                    style: "cancel"
                },
                {
                    text: 'Yep',
                    onPress: singOut
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={handleSingOut}>
                <Avatar photo={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola,
                    </Text>
                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje eh dia de vitoria
                </Text>
            </View>
        </View>
    )
}