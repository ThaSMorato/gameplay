import React from "react";
import { ScrollView, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { defaultTheme } from "../../global/styles/theme";
import { categories } from '../../utils/categories'
import { Category } from "../Category";
import { styles } from "./styles";


type ICategorySelect = {
    categorySelected: string;
    setCategory: (categoryId : string) => void;
    hasCheckBox?: boolean;
}

export const CategorySelect = ({categorySelected, setCategory, hasCheckBox = false} : ICategorySelect) => {

    return (
       <ScrollView 
            style={styles.container} 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingRight: 40 }}
            horizontal
       >
           {
               categories.map((category) => 
                   <Category 
                        key={category.id}
                        icon={category.icon}
                        title={category.title}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                   />
               )
           }
        </ScrollView>
    )
}