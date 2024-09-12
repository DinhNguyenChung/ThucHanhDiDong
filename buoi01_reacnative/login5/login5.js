import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-elements';

const Login5 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view1}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}
                >
                    LOGIN
                </Text>
            </View>
            <View style={styles.viewInput}>
                <TextInput placeholder="Email" style={styles.textinput} placeholderTextColor={'black'} />
            </View>
            <View style={styles.viewInput}>
                <TextInput
                    placeholder="Password"
                    name="Password"
                    style={styles.textinput}
                    placeholderTextColor={'black'}
                />
                <Icon name="visibility" size={35} color="black" style={styles.icon} />
            </View>
            <View>
                <Button
                    title="LOGIN"
                    color="White"
                    buttonStyle={{
                        backgroundColor: '#E53935',
                        // borderRadius: 10,
                        width: 350,
                        marginTop: 50,
                        height: 50,
                    }}
                    titleStyle={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                />
            </View>
            <View style={styles.view4}>
                <Text style={{ marginBottom: 10 }}>When you agree to terms and conditions</Text>
                <TouchableOpacity style={{ marginBottom: 10 }}>
                    <Text
                        style={{
                            color: 'blue',
                            // textDecorationLine: 'underline',
                        }}
                    >
                        Forgot your password?
                    </Text>
                </TouchableOpacity>
                <Text>Or login with</Text>
            </View>
            <View style={styles.viewButton}>
                <Button
                    icon={{
                        name: 'facebook',
                        color: 'white',
                        fontSize: 30,
                    }}
                    buttonStyle={{
                        width: 100,
                        backgroundColor: '#25479B',
                        height: 50,
                    }}
                />
                <Button
                    // icon={{
                    //     name: 'logo-vimeo',
                    //     type: 'ionicon',
                    //     color: 'white',
                    // }}
                    title={'Z'}
                    titleStyle={{
                        color: 'white',
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}
                    buttonStyle={{
                        width: 100,
                        backgroundColor: '#0680F1',
                        height: 50,
                    }}
                />
                <Button
                    icon={
                        // {
                        //     name: 'google',
                        //     type: 'font-awesome',
                        //     color: 'white',
                        // }
                        <Image source={require('../pic/login5/icogoogle1.png')} />
                    }
                    buttonStyle={{
                        width: 100,
                        height: 50,
                        backgroundColor: '#ffffff',
                        borderWidth: 1,
                        borderColor: 'blue',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Login5;
