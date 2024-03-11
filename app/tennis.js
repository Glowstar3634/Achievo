import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImageManipulator from 'react-native-image-manipulator';
const TennisScreen = () => {
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
      <TouchableOpacity style={{flexDirection:'row', marginTop: 20, backgroundColor: COLORS.dark1, width:100, height:40, borderRadius: 20}} onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 10}}
              source={require('../constants/images/UIcons/left-arrow-6404.png')}
              tintColor={"white"}
              resizeMode='contain'
            />
            </TouchableOpacity>
      <Text style={styles.screenHeader}>Tennis</Text>
      </View>
  
      <View style={{flex:3, height: '100%',width: '100%', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
      
    
      <View style={{
      flexDirection:'row',
      width:'95%',
      height: 200
    }}>
    <View style={{
      flexDirection:'column',
      flex:2,
      width:'95%'
      }}>
      <View elevation={5} style={[styles.clubBlock, {flexDirection: 'column' ,height: '100%', borderColor: COLORS.white, borderWidth:2, justifyContent: 'space-around'}]}>
      <Image
              style={{ width: '95%',height: 90, marginTop: 20}}
              source={require('../constants/images/UIcons/icons8-warranty-50.png')}
              tintColor={"white"}
              resizeMode='contain'
            />
        <Text style={[styles.clubBlockHeader, {width:'100%', alignSelf: 'center', textAlign: 'center', fontSize: 16, marginTop:0, color: COLORS.white}]}>AWARDS</Text>
    </View>
      </View>
      <View style={{
      flexDirection:'column',
      flex:3,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 100, borderColor: COLORS.white, borderWidth:2}}
              source={require('../constants/images/UIcons/tennisDude.png')}
              resizeMode='cover'
            />
      </View>
      <View style={{
      flexDirection:'column',
      flex:2,
      width:'95%'
      }}>
      <View elevation={5} style={[styles.clubBlock, {flexDirection: 'column' ,height: '100%', borderColor: COLORS.white, borderWidth:2, justifyContent: 'space-around'}]}>
      <Image
              style={{ width: '95%',height: 90, marginTop: 20}}
              source={require('../constants/images/UIcons/icons8-multiple-stars-24.png')}
              tintColor={"white"}
              resizeMode='contain'
            />
        <Text style={[styles.clubBlockHeader, {width:'100%', alignSelf: 'center', textAlign: 'center', fontSize: 16, marginTop:0, color: COLORS.white}]}>STATS</Text>
    </View>
      </View>

    </View>

    <Text style={[styles.screenBio, {fontSize:25}]}>“I am a passionate student competing in multiple sports at the national level. I hope to teach others for my love of fitness”</Text>
      
      <View elevation={5} style={[styles.clubBlock, {width: '95%' ,flexDirection: 'column' , justifyContent: "space-around",height: 'auto',borderColor: COLORS.white, borderWidth:2, padding: 10}]}>
        <TouchableOpacity
            style={{
              height:200,
              alignItems: 'center',
              alignSelf:"center",
              justifyContent: 'space-around',
              width:'100%',
              borderRadius: 15,
              backgroundColor: COLORS.gray2
            }}
          >
          <Image
              style={{ width: '95%',height: 130}}
              source={require('../constants/images/UIcons/photo-1909.png')}
              resizeMode='contain'
            />
            <Text style={[styles.buttonText, {fontSize:30}]}>View Gallery</Text>
          </TouchableOpacity>
      </View>
  
      </View>

      </SafeAreaView>
    )
}
export default TennisScreen;