import { StyleSheet } from 'react-native'
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title : {
        fontFamily: defaultTheme.fonts.title700,
        color: defaultTheme.colors.heading,
        fontSize: 18,
        marginBottom: 11,
    },
    type: {
        fontFamily: defaultTheme.fonts.text400,
        color: defaultTheme.colors.highlight,
        fontSize: 13,
        marginBottom: 24,
    }
})