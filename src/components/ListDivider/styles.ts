import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 1,
        backgroundColor: defaultTheme.colors.secondary40,
        marginVertical: 21,
        alignSelf: 'flex-end',
    }
})