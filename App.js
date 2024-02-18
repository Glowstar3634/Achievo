import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/home';
import LoginScreen from './app/login';
import StartScreen from './app/start';
import SignUpScreen from './app/signup';
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
registerRootComponent(App);
