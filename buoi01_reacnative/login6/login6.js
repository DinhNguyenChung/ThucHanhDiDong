// import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, ButtonGroup } from 'react-native-elements';
import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';
import React, { useMemo, useState } from 'react';

const Login6 = () => {
    // Tạo danh sách radio buttons
    const radioButtons = useMemo(
        () => [
            { id: '1', label: 'Male', value: 'option1' },
            { id: '2', label: 'Female', value: 'option2' },
        ],
        [],
    );

    // Khởi tạo trạng thái đã chọn
    const [selectedId, setSelectedId] = useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view1}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}
                >
                    REGISTER
                </Text>
            </View>
            <View style={styles.viewInput}>
                <TextInput placeholder="Name" style={styles.textinput} placeholderTextColor={'black'} />
            </View>
            <View style={styles.viewInput}>
                <TextInput placeholder="Phone" style={styles.textinput} placeholderTextColor={'black'} />
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
            <View style={styles.viewInput}>
                <TextInput placeholder="Birthday" style={styles.textinput} placeholderTextColor={'black'} />
            </View>
            <View style={styles.viewRadioButton}>
                {/* <RadioGroup radioButtons={radioButtons} onPress={setSelectedId} selectedId={selectedId} /> */}
                <View style={styles.radioButtonWrapper}>
                    <RadioButton
                        id="1"
                        label="Male"
                        value="male"
                        onPress={() => setSelectedId('1')}
                        selected={selectedId === '1'}
                    />
                </View>
                <View style={styles.radioButtonWrapper}>
                    <RadioButton
                        id="2"
                        label="Female"
                        value="female"
                        onPress={() => setSelectedId('2')}
                        selected={selectedId === '2'}
                    />
                </View>
            </View>
            <View>
                <Button
                    title="REGISTER"
                    color="White"
                    buttonStyle={{
                        backgroundColor: '#E53935',
                        // borderRadius: 10,
                        width: 350,
                        marginTop: 20,
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
                {/* <TouchableOpacity style={{ marginBottom: 10 }}>
                    <Text
                        style={{
                            color: 'blue',
                            // textDecorationLine: 'underline',
                        }}
                    >
                        Forgot your password?
                    </Text>
                </TouchableOpacity>
                <Text>Or login with</Text> */}
            </View>
        </SafeAreaView>
    );
};

export default Login6;
