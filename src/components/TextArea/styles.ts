import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: defaultTheme.colors.secondary40,
        borderRadius: 8,
        color: defaultTheme.colors.heading,
        fontFamily: defaultTheme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        padding: 16,
        borderWidth: 1,
        borderColor: defaultTheme.colors.secondary50,
        textAlignVertical: 'top',
    },
    
})