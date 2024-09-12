import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    view1: {
        marginTop: 10,
        marginBottom: 30,
    },
    textinput: {
        width: 300,
        // backgroundColor: '#C4C4C44D',
        height: 50,
        color: 'black',
    },
    icon: {
        marginRight: 10, // Tùy chỉnh khoảng cách giữa icon và TextInput
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C4C4C44D',
        marginTop: 30,
        width: 350,
        padding: 5,
    },
    view4: {
        alignItems: 'center',
        marginTop: 30,
    },
    viewButton: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        width: 300,
        marginTop: 30,
    },
});
