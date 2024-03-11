import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ExportOptScreen = () => {
  const navigation = useNavigation();
  var name = "Ethan Poon";
  const [orgSearch, onOrgUpdate] = React.useState('');
  const [passwordInput, onPasswordUpdate] = React.useState('');

  return (
    <SafeAreaView style={{
      flex:1,
      display:'flex',
      alignItems:'center',
      justifyContent:'flex-start',
      backgroundColor: COLORS.dark
    }}>
    <View style={{width:'100%'}}>
    <TouchableOpacity style={{flexDirection:'row', marginTop: 20, backgroundColor: COLORS.dark1, width:100, height:40, borderRadius: 20}} onPress={() => navigation.navigate('Home')}>
          <Image
            style={{ width: 30, height: 30, marginLeft: 10}}
            source={require('../constants/images/UIcons/left-arrow-6404.png')}
            tintColor={"white"}
            resizeMode='contain'
          />
          <Image
            style={{ width: 30, height: 30, marginLeft: 10}}
            source={require('../constants/images/UIcons/home-6133.png')}
            tintColor={"white"}
            resizeMode='contain'
          />
          </TouchableOpacity>
    <Text style={styles.screenHeader}>Export Your Portfolio</Text>
    <Text style={styles.screenBio}>Choose an exporting option below:</Text>
    
    </View>

    <View style={{flex:3, height: '100%',width: '100%', display:'flex'}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    
    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 100, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Generate Resume from Portfolio</Text>
    </TouchableOpacity>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 100, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Generate Resume with AI</Text>
    </TouchableOpacity>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 100, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Generate Website from Portfolio</Text>
    </TouchableOpacity>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 100, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Generate Website with AI</Text>
    </TouchableOpacity>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 100, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Manual Resume Creation</Text>
    </TouchableOpacity>

    </ScrollView>

    <TouchableOpacity style={{width:380, height:200, backgroundColor:COLORS.dark2,borderColor: COLORS.white, borderWidth:2, borderRadius:10,shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0, shadowColor: COLORS.secondary, borderRadius:40,alignItems: 'center',
        alignSelf:"center",marginTop:10}} onPress= {() => navigation.navigate('ExportOpt')}>
        <Image
        style={{width:130, height:130, marginRight:240, borderRadius:40, marginTop:10,borderColor: COLORS.white, borderWidth:2}}
        source={require('../app/pfp.png')}
        />
        <Text style={{color: 'white', marginLeft:100, fontWeight:'bold', fontSize:30, marginTop:-120, marginRight:30}}>
          Ethan Poon
        </Text>
        <Text style={{color: 'white', marginLeft:100, fontWeight:'bold', fontSize:15, marginRight:-40, marginTop:20}}>
          Major: Computer Science
        </Text>
        <Text style={{color: 'white', marginLeft:100, fontWeight:'bold', fontSize:15, marginRight:20, marginTop:20}}>
          Grade: 11th / Junior
        </Text>
        <Text style={{color: 'white', marginLeft:100, fontWeight:'bold', fontSize:15, marginRight:30, marginTop:20}}>
          Location: NJ, USA
        </Text>
        
    </TouchableOpacity>

    </View>
    </SafeAreaView>
  )
}

export default ExportOptScreen;