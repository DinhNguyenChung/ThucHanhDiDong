import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/ScreenHome';
import DetailJob from './Screens/DetailJob';
import AddJob from './Screens/AddJob';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailJob"
          component={DetailJob}
          // options={{headerShown:false}}
          
          options={({ route })=>({
            
            headerRight: () => {
              const {user} = route.params
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 10,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./pic/Rectangle.png')}
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 10,
                      backgroundColor: '#9095A0',
                      borderRadius: '50%',
                    }}
                  />

                  <View>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 19,
                        textAlign: 'center',
                      }}>
                      Hi {user?.name}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: 'gray',
                      }}>
                      Have agrate day a head
                    </Text>
                  </View>
                </View>
              );
            },
            headerTitle: () => <Text></Text>,
          })}
        />
        <Stack.Screen name="AddJob" component={AddJob} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
