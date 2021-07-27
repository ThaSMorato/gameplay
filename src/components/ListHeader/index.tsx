import React from "react";
import {
    View,
    Text
} from "react-native";
import { styles } from "./styles";

type IListHeaderProps = {
    title: string;
    subtitle: string;
}

export const ListHeader = ({title, subtitle} : IListHeaderProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                { title }
            </Text>

            <Text style={styles.subtitle}>
                { subtitle }
            </Text>
        </View>
    );
}