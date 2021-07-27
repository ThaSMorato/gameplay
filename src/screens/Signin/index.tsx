import React from "react";
import { 
  View, 
  Text,
  Image
} from "react-native";

import IllustrationImg from "../../assets/illustration.png"; 
import DiscordImg from "../../assets/discord.png";

import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native";

export const Signin = () => {

  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
     
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"}
          suas jogatinas {"\n"}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          icon={DiscordImg}
          title="Entrar com Discord"
          onPress={handleSignIn}
        />
      </View>
    </View>
  )

}