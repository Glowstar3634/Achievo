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
      </Stack.Navigator>
  );
};

export default index;