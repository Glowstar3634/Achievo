import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'expo-av';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [usernameInput, onUsernameUpdate] = React.useState('');
  const [passwordInput, onPasswordUpdate] = React.useState('');
  
  const handleLogInPress = () =>{
    const success = true;

    if (success == true){
      navigation.navigate('Home');
    }
  }

  return (
    <SafeAreaView style={{
      flex:1,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLORS.shadow
  }}>
      <Video
      source={require('../constants/videos/copy_16A8AD4E-27DA-402C-BB0B-699EEB2C552A.mov')} // Replace with your video file
      rate={1.0}
      volume={1.0}
      isMuted={false}
      shouldPlay = {true}
      isLooping = {true}
      style={[styles.video, {
        top: -550,
        left: 0,
        bottom: 0,
        right: 0,
      }]}
      />
      <View style={{
      alignContent:'flex-start',
      alignSelf:'flex-start',
      flexDirection: 'column',
      justifyContent:'center',
      flex:1,
      marginTop:25, height: '100%',
      }}>
      
        <TouchableOpacity style={{ height: 40, backgroundColor: "#060218AA", borderRadius: 10, marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 20, height: 20, marginLeft: 10}}
          source={require('../constants/images/UIcons/left-arrow-6404.png')}
          tintColor={"white"}
        />
        <Text style={{
          color: COLORS.white,
          marginLeft: 20,
          marginRight: 20,
          fontWeight: 'bold',
          fontSize: 20
        }}>
          Back
        </Text>
        </TouchableOpacity>
      </View>
      
      <View style={{
      alignContent:'space-around',
      flexDirection: 'column',
      justifyContent:'flex-start',
      flex:2,
      width:'100%',
      borderTopRightRadius: 70,
      borderTopLeftRadius: 70,
      marginTop:80,
      }}>
      <View
    
    style={{
      alignContent:'space-around',
      flexDirection: 'column',
      justifyContent:'flex-start',
      flex:9,
      width:'100%',
      borderTopRightRadius: 70,
      borderTopLeftRadius: 70,
    }}
  >
      
      <View style={{flex:2, marginBottom: 40}}>
      
      </View>

      <View style={{flex:14, justifyContent: "space-around"}}>
      <View style={{marginBottom:10, marginLeft:-30, marginRight: -30,}}>
      
      <Text style={styles.startInputHint}>Email:</Text>
      <View style={styles.startInputArea}>
        <TextInput 
          style={styles.startInput}
          onChangeText={usernameInput => onUsernameUpdate(usernameInput)}
          defaultValue= {usernameInput}
        />
      </View>
      
      </View>
      
      <View style={{marginBottom:20, marginLeft:-30, marginRight: -30,}}>
      <Text style={styles.startInputHint}>Password:</Text>
      <View style={styles.startInputArea}>
        <TextInput 
          style={styles.startInput}
          onChangeText={passwordInput => onPasswordUpdate(passwordInput)}
          secureTextEntry={true}
          defaultValue= {passwordInput}
        />
      </View>
      </View>


      <Text style={[styles.startInputHint, {textAlign:'center'}]}>OR</Text>

      </View>
      <View style={{flex:4, flexDirection:"row", justifyContent: "space-around"}}>
      <TouchableOpacity>
      <Image
          style={{height: "100%", aspectRatio: 1}}
          source={require('../constants/images/brand/9812e19e7bf150a7f17bf2849dd5a33e.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
          style={{height: "100%", aspectRatio: 1, tintColor: COLORS.white}}
          source={require('../constants/images/brand/Apple-Logo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
          style={{height: "100%", aspectRatio: 1}}
          source={require('../constants/images/brand/facebook.png')}
        />
      </TouchableOpacity>
      </View>

      <View style={{flex:6}}>
      <TouchableOpacity
        style={[styles.sectionShadow, styles.buttonStart, {
          backgroundColor: COLORS.primary, 
          shadowColor: COLORS.primary,
          marginTop: 40,
          shadowOffset: {
          width: 0,
          height: 0
          },
          shadowRadius: 20,
          shadowOpacity: 1.0,
          }]}
        onPress={handleLogInPress}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      </View>
        </View>
  </SafeAreaView>
  )
}

export default LoginScreen