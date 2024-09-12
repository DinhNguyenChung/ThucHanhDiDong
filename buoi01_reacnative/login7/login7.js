import React from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, ButtonGroup, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const Login7 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view1}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        // textAlign: 'center',
                    }}
                >
                    LOGIN
                </Text>
            </View>
            <View style={styles.view2}>
                <Input
                    placeholder="Name"
                    style={styles.input}
                    leftIcon={<Icon name="person" size={24} color="black" />}
                    inputContainerStyle={{
                        backgroundColor: '#C4C4C44D',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        padding: 3,
                    }}
                    inputStyle={{
                        borderRadius: 5,
                        height: 50,
                    }}
                    placeholderTextColor="#888"
                    containerStyle={{
                        width: '100%',
                    }}
                    underlineColorAndroid="transparent"
                />
                <Input
                    placeholder="Password"
                    style={styles.input}
                    leftIcon={<Icon name="lock" size={24} color="black" />}
                    rightIcon={<Icon name="visibility" size={24} color="black" />}
                    inputContainerStyle={{
                        backgroundColor: '#C4C4C44D',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#ffffff',
                        padding: 3,
                    }}
                    inputStyle={{
                        borderRadius: 5,
                        height: 50,
                    }}
                    placeholderTextColor="#888"
                    containerStyle={{
                        width: '100%',
                    }}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View>
                <Button
                    title={'LOGIN'}
                    buttonStyle={{
                        width: '85%',
                        alignSelf: 'center',
                        marginTop: 40,
                        backgroundColor: 'black',
                    }}
                    titleStyle={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        marginTop: 50,
                        alignSelf: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}
                    >
                        CREATE ACCOUNT
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login7;
