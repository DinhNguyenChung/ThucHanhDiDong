import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view1: {
        marginTop: 50,
        alignItems: 'center',
    },
    view2: {},
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: 20,
    },
    view5: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: 20,
    },
    view5Text: {
        color: 'blue',
        textAlign: 'center',
        lineHeight: 11,
    },
    view6: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
});
