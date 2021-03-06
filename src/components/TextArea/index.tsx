import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export const TextArea = ({...res} : TextInputProps) => {
  return(
       <TextInput 
            style={styles.container}
            {...res}
        />
  );
}