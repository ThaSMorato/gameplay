import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
     width: 104,
     height: 120,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 8,
     marginRight: 8,
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: defaultTheme.colors.secondary40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 7,
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: defaultTheme.colors.primary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3,
    },
    check: {
        width: 12,
        height: 12,
        backgroundColor: defaultTheme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: defaultTheme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3,
    },
    title: {
        fontFamily: defaultTheme.fonts.title500,
        color: defaultTheme.colors.heading,
        fontSize: 15,
    },
})