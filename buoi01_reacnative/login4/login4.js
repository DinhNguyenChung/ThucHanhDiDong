import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';

const Login4 = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                // alignItems: 'center',
            }}
        >
            <LinearGradient
                colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <View style={styles.container}>
                    <View style={styles.view1}>
                        <Text
                            style={{
                                fontSize: 80,
                                fontWeight: 'bold',
                                color: 'black',
                            }}
                        >
                            CODE
                        </Text>
                    </View>
                    <View style={styles.view2}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black',
                            }}
                        >
                            VERIFICATION
                        </Text>
                    </View>
                    <View style={styles.view3}>
                        <Text>Enter ontime password sent on</Text>
                        <Text>++849092605798</Text>
                    </View>
                    <View style={styles.view4}>
                        <TextInput style={styles.textinput}></TextInput>
                        <TextInput style={styles.textinput}></TextInput>
                        <TextInput style={styles.textinput}></TextInput>
                        <TextInput style={styles.textinput}></TextInput>
                        <TextInput style={styles.textinput}></TextInput>
                        <TextInput style={styles.textinput}></TextInput>
                    </View>
                    <View style={styles.view5}>
                        <Button
                            title={'VERIFY CODE'}
                            buttonStyle={{
                                width: 330,
                                backgroundColor: '#E3C000',
                            }}
                            titleStyle={{
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        />
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default Login4;
