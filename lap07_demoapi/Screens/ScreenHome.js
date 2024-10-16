import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements';
export default function Home({ navigation }) {
  const [NameUser, setNameUser] = useState('');
  const getUser = async () => {
    return await fetch('https://670955e3af1a3998baa13006.mockapi.io/users')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getUser().then((users) => {
      console.log(users);
    });
  }, []);
  return (
    <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../pic/Image95.png')}
            style={{ width: '65%' }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text
              style={{ color: '#8353E2', fontSize: 25, fontWeight: 'bold' }}>
              MANAGE YOUR
            </Text>
            <Text
              style={{ color: '#8353E2', fontSize: 25, fontWeight: 'bold' }}>
              TASK
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 50,
              width: '90%',
              alignItems: 'center',
            }}>
            <Icon name="envelope" size={25} style={{ paddingHorizontal: 10 }} />
            <TextInput
              style={{
                width: '100%',
                height: 30,
                borderColor: 'gray',
                paddingHorizontal: 20,
              }}
              placeholder="Enter your email"
              placeholderTextColor={'gray'}
              onChangeText={(text) => setNameUser(text)}
            />
          </View>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Button
            title="GET STARTED"
            buttonStyle={{ borderRadius: 20, marginTop: 30, width: 170 }}
            icon={
              <Icon
                name="arrow-right"
                color="white"
                size={15}
                style={{ padding: 5 }}
              />
            }
            iconRight
            onPress={() => {
              getUser().then((users) => {
                if (NameUser.trim().length === 0) {
                  alert('Please enter a valid name');
                  return;
                }

                const matchUser = users.find((user) => user.name === NameUser);
                if (matchUser) {
                  console.log(`User found: ${matchUser.name}`);
                  navigation.navigate('DetailJob',{ user:matchUser });
                } else {
                  console.log(`User not found`);
                }
              });
            }} // Đặt onPress trực tiếp trên Button
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
