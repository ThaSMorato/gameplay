import React from 'react';
import { View, 
    Modal,
    ModalProps
 } from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

type IModalViewProps = ModalProps & {
    children: React.ReactNode;
}

const ModalView = ({children, ...rest} : IModalViewProps) => {
  return (
    <Modal 
        transparent
        animationType="slide"
        {...rest}
    >
        <View style={styles.overlay}>
            <View style={styles.container}>
                <Background>
                    <View style={styles.bar} />
                    { children }
                </Background>
            </View>
        </View>
    </Modal>
  )
}

export default ModalView;