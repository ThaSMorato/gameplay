import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 1,
        backgroundColor: defaultTheme.colors.secondary40,
        marginTop: 2,
        marginBottom: 32,
        alignSelf: 'flex-end',
    }
})