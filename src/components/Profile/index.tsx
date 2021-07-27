import React from "react";
import { 
    Text, 
    View 
} from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export const Profile = () => {
    return (
        <View style={styles.container}>
            <Avatar photo={"https://api.multiavatar.com/Conzy.png"} />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola,
                    </Text>
                    <Text style={styles.username}>
                        Thales
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje eh dia de vitoria
                </Text>
            </View>
        </View>
    )
}