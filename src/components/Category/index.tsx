import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from "expo-linear-gradient";
import { defaultTheme } from "../../global/styles/theme";

type ICategory = RectButtonProps & {
    title: string,
    icon: React.FC<SvgProps>,
    checked: boolean,
}

export const Category = ({title, icon: Icon, checked = false, ...rest} : ICategory) => {

    const {secondary50, secondary70} = defaultTheme.colors;

    return (
       <RectButton 
            {...rest}
       >
           <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
           >
               <View style={[styles.content, { opacity: checked ? 1 : 0.4}]}>
                    <View style={checked? styles.checked : styles.check } />
                    <Icon 
                        width={48} 
                        height={48}
                    />
                    <Text style={styles.title}>
                        {title}
                    </Text>
               </View>
           </LinearGradient>
        </RectButton>
    )
}