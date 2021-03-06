import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { defaultTheme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner : {
        width: '100%',
        height: 234,        
    },
    bannerContent : {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30,
    },
    title : {
        fontSize: 28,
        fontFamily: defaultTheme.fonts.title700,
        color: defaultTheme.colors.heading
    },
    subtitle : {
        fontSize: 13,
        fontFamily: defaultTheme.fonts.text400,
        color: defaultTheme.colors.heading,
        lineHeight: 21,
    },
    members : {
        marginLeft: 24,
        marginTop: 27,
    },
    footer : {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }
})