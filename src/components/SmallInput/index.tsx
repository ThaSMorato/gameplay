import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export const SmallInput = ({...res} : TextInputProps) => {
  return(
       <TextInput 
            style={styles.container}
            keyboardType="numeric"
            {...res}
        />
  );
}