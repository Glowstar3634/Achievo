import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/home';
import LoginScreen from './app/login';
import StartScreen from './app/start';
import SignUpScreen from './app/signup';
import ClubsScreen from "./app/clubs";
import AcademicsScreen from "./app/academics";
import ArtsScreen from "./app/arts";
import AthleticsScreen from "./app/athletics";
import ServiceScreen from "./app/service";
import { registerRootComponent } from 'expo';
import tsa from "./app/tsa";
import ExportOptScreen from './app/exportOpt';
import ViolinScreen from './app/violin';
import TennisScreen from './app/tennis';
import rtsa from "./app/rtsa";
import vb from "./app/vb"

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
        <Stack.Screen name="Clubs" component={ClubsScreen} />
        <Stack.Screen name="Academics" component={AcademicsScreen} />
        <Stack.Screen name="Arts" component={ArtsScreen} />
        <Stack.Screen name="Athletics" component={AthleticsScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="TSA" component={tsa} />
        <Stack.Screen name="ExportOpt" component={ExportOptScreen} />
        <Stack.Screen name="Violin" component={ViolinScreen} />
        <Stack.Screen name="Tennis" component={TennisScreen}/>
        <Stack.Screen name="rTSA" component={rtsa}/>
        <Stack.Screen name="volleyball" component={vb}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
registerRootComponent(App);
