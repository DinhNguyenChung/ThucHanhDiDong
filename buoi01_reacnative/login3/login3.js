import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
                        <Image source={require('../pic/login3/lock_closed.png')} style={{ width: 140, height: 152 }} />
                    </View>
                    <View style={styles.view2}>
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: 700,
                                height: '58px',
                                textAlign: 'center',
                            }}
                        >
                            FORGET{'\n'}PASSWORD
                        </Text>
                    </View>

                    <View style={styles.view3}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}
                        >
                            Provide your account’s email for which you want to reset your password
                        </Text>
                    </View>
                    {/* <View style={styles.view5}>
                        <Button
                            title={'Email'}
                            titleStyle={{
                                textAlign: 'left',
                            }}
                            buttonStyle={{
                                justifyContent: 'flex-start',
                                marginTop: 30,
                                backgroundColor: 'grey',
                            }}
                            icon={
                                <Icon
                                    name="email" // Tên icon email từ MaterialIcons
                                    size={20}
                                    color="white"
                                />
                            }
                        />
                    </View> */}
                    <View>
                        <Input
                            inputStyle={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                                backgroundColor: '#C4C4C4',
                            }}
                            placeholder="Email"
                            leftIcon={<Icon name="email" size={24} p color="white" />}
                            // containerStyle={{
                            //     backgroundColor: '#C4C4C4',
                            //     height: 50,
                            //     borderBottomWidth: 0,
                            // }}
                            inputContainerStyle={{
                                backgroundColor: '#C4C4C4',
                                height: 50,
                                borderBottomWidth: 0,
                                paddingLeft: 10,
                            }}
                        ></Input>
                    </View>
                </View>
                <View style={styles.view4}>
                    <Button title="NEXT" buttonStyle={styles.button} titleStyle={styles.buttonText} />
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default login2;
