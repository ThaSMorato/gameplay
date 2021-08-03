import React from 'react';
import { View, 
    Modal,
    ModalProps,
    TouchableWithoutFeedback
 } from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

type IModalViewProps = ModalProps & {
    children: React.ReactNode;
    closeModal: () => void
}

const ModalView = ({children, closeModal, ...rest} : IModalViewProps) => {
  return (
    <Modal 
        transparent
        animationType="slide"
        statusBarTranslucent
        {...rest}
    >
        <TouchableWithoutFeedback onPress={closeModal} >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar} />
                        { children }
                    </Background>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ModalView;