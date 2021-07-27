import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user : {
        flexDirection: 'row',
    },
    greeting : {
        fontFamily: defaultTheme.fonts.title500,
        fontSize: 24,
        marginRight: 6,
        color: defaultTheme.colors.heading,
    },
    username : {
        fontFamily: defaultTheme.fonts.title700,
        fontSize: 24,
        color: defaultTheme.colors.heading,
    },
    message : {
        fontFamily: defaultTheme.fonts.text400,
        color: defaultTheme.colors.highlight,
    }
})