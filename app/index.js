import { useRouter } from "expo-router";
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import styles from '../styles/search';
import { COLORS } from '../constants';

import SignUpScreen from "./signup";
import Start from "./start";
import LoginScreen from "./login";
import HomeScreen from "./home";
import ClubsScreen from "./clubs";
import AcademicsScreen from "./academics";
import ArtsScreen from "./arts";
import AthleticsScreen from "./athletics";
import ServiceScreen from "./service";

const Stack = createStackNavigator();

const index = () => {
  const navigation = useRouter();
  return (
      <Stack.Navigator initialRouteName="start" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="start" component={Start} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="clubs" component={ClubsScreen} />
        <Stack.Screen name="academics" component={AcademicsScreen} />
        <Stack.Screen name="arts" component={ArtsScreen} />
        <Stack.Screen name="athletics" component={AthleticsScreen} />
        <Stack.Screen name="service" component={ServiceScreen} />
      </Stack.Navigator>
  );
};

export default index;