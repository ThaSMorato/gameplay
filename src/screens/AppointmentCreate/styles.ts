import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label : {
        fontSize: 18,
        fontFamily: defaultTheme.fonts.title700,
        color: defaultTheme.colors.heading
    },
    form : {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select : {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        borderColor: defaultTheme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    selectBody : {
        flex: 1,
        alignItems: 'center',
    },
    image : {
        height: 68,
        width: 64,
        backgroundColor: defaultTheme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
    },
    field : {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider : {
        marginRight: 4,
        fontSize: 18,
        fontFamily: defaultTheme.fonts.text400,
        color: defaultTheme.colors.highlight,
    },
    caracteresLimit : {
        fontSize: 13,
        fontFamily: defaultTheme.fonts.text400,
        color: defaultTheme.colors.highlight,
    },
    footer : {
        marginVertical: 20,
        marginBottom: 56,
    }
})