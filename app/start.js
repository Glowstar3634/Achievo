import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import * as ImageManipulator from 'react-native-image-manipulator';

const StartScreen = () => {
  console.log('StartScreen loaded');
  const navigation = useNavigation();
  
  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  
  return (
    <SafeAreaView style={{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:COLORS.shadow,
        padding:50
    }}>
        <Video
        source={require('../constants/videos/copy_16A8AD4E-27DA-402C-BB0B-699EEB2C552A.mov')} // Replace with your video file
        rate={1}
        volume={1.0}
        isMuted={false}
        shouldPlay = {true}
        isLooping = {true}
        style={styles.video}
        />
        <TouchableOpacity style={[styles.sectionShadow, styles.buttonStart, {
          backgroundColor: COLORS.primary, 
          shadowColor: COLORS.primary,
          shadowOffset: {
          width: 0,
          height: 0
          },
          shadowRadius: 20,
          shadowOpacity: 1.0,
          }]} onPress={handleLoginPress}>
        <Text style={{fontSize: 18, color: COLORS.white, fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStart, {
          
          }]}>
        <Text style={{fontSize: 18, color: COLORS.white, fontWeight: 'bold'}} onPress={handleSignUpPress}>Sign Up</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
} 

export default StartScreen;