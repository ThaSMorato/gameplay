import { StyleSheet } from 'react-native'
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 100,
    },
    overlay: {
        backgroundColor: defaultTheme.colors.overlay,
        flex: 1,
    },
    bar : {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: defaultTheme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
        marginBottom: 103,
    }
})