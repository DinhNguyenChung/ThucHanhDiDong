import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
const login2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient with custom colors
                colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
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
                <View style={styles.view5}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>HOW WE WORK ?</Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default login2;
