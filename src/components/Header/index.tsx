import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { defaultTheme } from '../../global/styles/theme';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type IHeaderProps = {
    title: string,
    action? :ReactNode
}

export const Header = ({title, action} : IHeaderProps) => {

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    const { secondary100, secondary40, heading } = defaultTheme.colors

  return (
      <LinearGradient
        colors={[secondary100, secondary40]}
        style={styles.container}
      >
          <BorderlessButton
            onPress={handleGoBack}
          >
            <Feather 
                name="arrow-left"
                size={24}
                color={heading}
            />
          </BorderlessButton>

          <Text style={styles.title}>
              { title }
          </Text>

          {
              action ?
              <View>
                  { action }
              </View>
              :
              <View style={{ width: 24}} />
          }
      </LinearGradient>
  )
}
