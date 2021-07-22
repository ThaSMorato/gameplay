import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: defaultTheme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6
    },
    title : {
        flex: 1,
        color: defaultTheme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
    },
    iconWrapper: {
        width: 56,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: defaultTheme.colors.line,
    },
    icon: {
        width: 24,
        height: 18,
    }
})