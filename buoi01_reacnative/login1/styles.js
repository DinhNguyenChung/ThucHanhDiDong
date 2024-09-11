import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#00CCF9',
        // padding: 8,
        justifyContent: 'space-between',
        padding: 30,
    },
    view1: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 27,
    },
    view2: {
        display: 'flex',

        // flexDirection:'column',
    },
    view3: {
        // marginTop:
    },
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
    },
    button: {
        backgroundColor: 'yellow',
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
});
