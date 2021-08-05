import React from "react";

import {View, ActivityIndicator} from "react-native";
import { defaultTheme } from "../../global/styles/theme";
import { styles } from "./styles";

export const Load = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color={defaultTheme.colors.primary}
            >

            </ActivityIndicator>
        </View>
    )
}