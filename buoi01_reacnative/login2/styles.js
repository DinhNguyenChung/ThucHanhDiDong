import { StyleSheet } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        // backgroundColor: '#00CCF9',
        // padding: 8,
        justifyContent: 'space-between',
        padding: 30,
        width: '100%',
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
    view5: {
        fontWeight: 'bold',
        textAlign: 'center',
        // background: 'linear-gradient(to right, red, yellow)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        // bottom: 10,
    },
});
