import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
        justifyContent:'center',
        backgroundColor:COLORS.bg
    }}>
        <View style={{
        alignContent:'center',
        flexDirection: 'column',
        justifyContent:'center',
        flex:1,
        width: '100%', height: '100%'
        }}>
          <Image
            style={{ width: '100%', height: '80%', resizeMode: 'contain'}}
            source={require('../constants/images/brand/Achievo-logo-bg.png')}
          />
        </View>

        <View style={{flex:1, justifyContent:'flex-start', width: '100%', height: '100%'}}>
        <TouchableOpacity
          style={[styles.buttonStart, styles.loginButton]}
          onPress={handleLoginPress}
        >
          <Text style={styles.buttonText}>L O G I N</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonStart, styles.signUpButton]}
          onPress={handleSignUpPress}
        >
          <Text style={styles.buttonText}>S I G N   U P</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
} 

export default StartScreen;