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
import RTSA from './app/rtsa';
import VolleyBall from './app/vb';
import SearchScreen from './app/search';
import Nova from './app/nova';
import Kumon from './app/kumon';
import SciOly from './app/scioly';
import Gallery from './app/gallery';
import HomeNova from './app/homeNova';
import Resume from './app/resume';

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
        <Stack.Screen name="rTSA" component={RTSA}/>
        <Stack.Screen name="volleyball" component={VolleyBall}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="Nova" component={Nova}/>
        <Stack.Screen name="Kumon" component={Kumon}/>
        <Stack.Screen name="Scioly" component={SciOly}/>
        <Stack.Screen name="Gallery" component={Gallery}/>
        <Stack.Screen name="HomeNova" component={HomeNova}/>
        <Stack.Screen name="Resume" component={Resume}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
registerRootComponent(App);
