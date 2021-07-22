import { StyleSheet } from 'react-native'
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: defaultTheme.colors.background,
    },
    image : {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -40,
        padding: 50,
    },
    title: {
        color: defaultTheme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle: {
        color: defaultTheme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
    }
})