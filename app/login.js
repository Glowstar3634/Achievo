import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
        backgroundColor:COLORS.dark
    }}>
        <View style={{
        alignContent:'flex-start',
        flexDirection: 'column',
        justifyContent:'center',
        flex:1,
        marginTop:25,
        width: '100%', height: '100%'
        }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 55, height: 55}}
            source={require('../constants/images/UIcons/left-arrow-6404.png')}
            tintColor={"#FFF"}
          />
          </TouchableOpacity>
        </View>
        
        <View style={{
        alignContent:'space-around',
        flexDirection: 'column',
        justifyContent:'flex-start',
        flex:9,
        width:'100%',
        backgroundColor:COLORS.white,
        
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        }}>
        <View style={{flex:6}}>
        <Text style={styles.startHeaders}>Log In</Text>
        </View>

        <View style={{flex:14, justifyContent: "space-around"}}>

        <View style={{marginBottom:20}}>
        <Text style={styles.startInputHint}>Username / Email</Text>
        <View style={styles.startInputArea}>
          <TextInput 
            style={styles.startInput}
            onChangeText={usernameInput => onUsernameUpdate(usernameInput)}
            defaultValue= {usernameInput}
          />
        </View>
        </View>
        
        <View style={{marginBottom:20}}>
        <Text style={styles.startInputHint}>Password</Text>
        <View style={styles.startInputArea}>
          <TextInput 
            style={styles.startInput}
            onChangeText={passwordInput => onPasswordUpdate(passwordInput)}
            secureTextEntry={true}
            defaultValue= {passwordInput}
          />
        </View>
        </View>


        <Text style={[styles.startInputHint, {textAlign:'center'}]}>Or Log In Using:</Text>

        </View>
        <View style={{flex:1, flexDirection:"row", justifyContent: "space-around"}}>
        <TouchableOpacity>
        <Image
            style={{ width: 25, height: 25, marginLeft:35}}
            source={require('../constants/images/UIcons/left-arrow-6404.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
            style={{ width: 25, height: 25}}
            source={require('../constants/images/UIcons/left-arrow-6404.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
            style={{ width: 25, height: 25, marginRight:35}}
            source={require('../constants/images/UIcons/left-arrow-6404.png')}
          />
        </TouchableOpacity>
        </View>

        <View style={{flex:6}}>
        <TouchableOpacity
          style={[styles.buttonStart, styles.signUpButton]}
          onPress={handleLogInPress}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        </View>
          </View>
    </SafeAreaView>
  )
}

export default LoginScreen