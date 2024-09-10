import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { styles } from './styles';
const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View
                    style={{
                        width: 140,
                        height: 140,
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            width: 120,
                            height: 120,
                            backgroundColor: '#00CCF9',
                            borderRadius: '50%',
                        }}
                    ></View>
                </View>
            </View>
            <View style={styles.view2}>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 700,
                        // fontStyle:'bold',
                        // width:'289px',
                        height: '58px',
                        textAlign: 'center',
                    }}
                >
                    GROW{'\n'}YOUR BUSINESS
                </Text>
            </View>

            <View style={styles.view3}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    We will help you to grow your business using online server
                </Text>
            </View>
            <View style={styles.view4}>
                <button style={styles.button}> LOGIN </button>
                <button style={styles.button}> SIGN UP </button>
            </View>
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         height: '100vh',
//         backgroundColor: '#00CCF9',
//         // padding: 8,
//         justifyContent: 'space-between',
//         padding: 30,
//     },
//     view1: {
//         // flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingTop: 27,
//     },
//     view2: {
//         display: 'flex',

//         // flexDirection:'column',
//     },
//     view3: {
//         // marginTop:
//     },
//     view4: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-end',
//         alignContent: 'flex-end',
//     },
//     button: {
//         backgroundColor: 'yellow',
//         borderRadius: 10,
//         padding: 10,
//     },
// });

export default Login;
