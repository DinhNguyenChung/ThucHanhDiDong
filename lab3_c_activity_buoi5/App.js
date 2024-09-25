import { Text, SafeAreaView, StyleSheet,View,Image } from 'react-native';
import { Icon,Button } from 'react-native-elements'
import Screen01 from "./layout/Screen01"
import Screen02 from "./layout/Screen02"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
   <NavigationContainer >
      <Tab.Navigator >
        <Tab.Screen
          name="Screen01"
          component={Screen01}
          options={{ headerShown: false ,
          tabBarStyle: { display: 'none' },}}
        />
        <Tab.Screen name="Screen02" 
        component={Screen02} 
        options={{ headerShown: false ,
        tabBarStyle: { display: 'none' },}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


