import React from "react";
import { 
  View, 
  Text,
  Image,
  Alert
} from "react-native";

import IllustrationImg from "../../assets/illustration.png"; 
import DiscordImg from "../../assets/discord.png";

import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { ActivityIndicator } from "react-native";
import { defaultTheme } from "../../global/styles/theme";

export const Signin = () => {

  // const navigation = useNavigation();

  const { user, singIn, loading } = useAuth();

  const handleSignIn = async () => {
    // navigation.navigate('Home');
    try {
      await singIn();
    } catch (e) {
      Alert.alert(e)
    }
  }

  return (
    <Background>
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
          {
            loading ? <ActivityIndicator color={defaultTheme.colors.primary} /> :
                      <ButtonIcon
                        icon={DiscordImg}
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                      />
          }
        </View>
      </View>
    </Background>
  )

}