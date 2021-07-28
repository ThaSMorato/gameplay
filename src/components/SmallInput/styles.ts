import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: defaultTheme.colors.secondary40,
        borderRadius: 8,
        color: defaultTheme.colors.heading,
        fontFamily: defaultTheme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
    },
    
})