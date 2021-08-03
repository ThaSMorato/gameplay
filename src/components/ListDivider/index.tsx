import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type IListDivierProps = {
  isCentered? :boolean
}

export const ListDivider = ({isCentered} : IListDivierProps) => {
  return (
      <View style={[styles.container,
      isCentered ? 
      {
        marginVertical: 12
      } : {
        marginTop: 2,
        marginBottom: 31,
      } 
      ]} />
  )
}
