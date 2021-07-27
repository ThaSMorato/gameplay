import { StyleSheet } from 'react-native';

import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 24,
    },
    content : {
        flex: 1,
    },
    header : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title : {
        fontFamily: defaultTheme.fonts.title700,
        fontSize: 18,
        color: defaultTheme.colors.heading,
    },
    category : {
        fontFamily: defaultTheme.fonts.text400,
        color: defaultTheme.colors.highlight,
        fontSize: 13,
        marginRight: 24,
    },
    footer : {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInfo : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playersInfo : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        fontFamily: defaultTheme.fonts.text500,
        color: defaultTheme.colors.heading,
        fontSize: 13,
        marginLeft: 7,
    },
    player : {
        fontFamily: defaultTheme.fonts.text500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    }
})