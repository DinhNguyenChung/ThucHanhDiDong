import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from '../login8/styles';
import { Button, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const Login8 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view1}>
                <Image source={require('../pic/login8/eyeball-3097971.png')} />
            </View>
            <View style={styles.view2}>
                <Input
                    placeholder="Please input user name"
                    leftIcon={{
                        name: 'person-outline',
                        color: '#386FFC',
                        size: 40,
                    }}
                    placeholderTextColor={'#C4C4C4'}
                    underlineColorAndroid={'#C4C4C4'}
                    inputContainerStyle={{
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: 20,
                        borderBottomColor: '#C4C4C4',
                    }}
                    inputStyle={
                        {
                            // width: '50%',
                        }
                    }
                    // underlineColorAndroid={'transparent'}
                />
                <Input
                    placeholder="Please input password"
                    leftIcon={{
                        name: 'lock-outline',
                        color: '#386FFC',
                        size: 40,
                    }}
                    placeholderTextColor={'#C4C4C4'}
                    // underlineColorAndroid={'#C4C4C4'}
                    inputContainerStyle={{
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: 20,
                        borderBottomColor: '#C4C4C4',
                        // borderWidth: 1,
                    }}
                    inputStyle={
                        {
                            // width: '50%',
                        }
                    }
                    // underlineColorAndroid={'transparent'}
                />
            </View>
            <View>
                <Button
                    title={'LOGIN'}
                    buttonStyle={{
                        backgroundColor: '#386FFC',
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: 40,
                    }}
                />
            </View>
            <View style={styles.view4}>
                <TouchableOpacity>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view5}>
                <Text style={styles.view5Text}>__________</Text>
                <Text>Other Login Methods</Text>
                <Text style={styles.view5Text}>__________</Text>
            </View>
            <View style={styles.view6}>
                <Button
                    icon={<Image source={require('../pic/login8/Group8.png')} />}
                    buttonStyle={{
                        backgroundColor: '#ffffff',
                        width: 75,
                        height: 75,
                    }}
                />
                <Button
                    icon={<Image source={require('../pic/login8/Group9.png')} />}
                    buttonStyle={{
                        backgroundColor: '#ffffff',
                        width: 75,
                        height: 75,
                    }}
                />
                <Button
                    icon={{
                        name: 'facebook',
                        color: '#ffffff',
                        size: '50%',
                    }}
                    buttonStyle={{
                        // backgroundColor: '#ffffff',
                        width: 75,
                        height: 75,
                        borderRadius: 10,
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Login8;
