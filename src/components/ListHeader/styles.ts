import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: defaultTheme.fonts.title700,
        color: defaultTheme.colors.heading,
        fontSize: 18,
    },
    subtitle: {
        fontFamily: defaultTheme.fonts.text400,
        color: defaultTheme.colors.highlight,
        fontSize: 13,
    }
})