import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImageManipulator from 'react-native-image-manipulator';
const TSA = () => {
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
      <Text style={styles.screenHeader}>FBLA</Text>
      <Text style={styles.screenBio}>The FBLA mission is to bring business and education together in a positive working relationship through innovative leadership and career development programs.</Text>
      </View>
  
      <View style={{flex:3, height: '100%',width: '100%', display:'flex'}}>
      <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
      <View elevation={5} style={[styles.clubBlock, {width: '70%' ,flexDirection: 'column' , justifyContent: "space-around",height: 'auto',borderColor: COLORS.white, borderWidth:2, padding: 10}]}>
        <TouchableOpacity
            style={{
              height:45,
              alignItems: 'center',
              alignSelf:"center",
              justifyContent: 'center',
              width:'100%',
              borderRadius: 15,
              backgroundColor: COLORS.gray2
            }}
          >
            <Text style={[styles.buttonText, {fontSize:20}]}>Council Members</Text>
          </TouchableOpacity>
      </View>
      <View elevation={5} style={[styles.clubBlock, {height: 'auto', flexDirection: 'column', borderColor: COLORS.white, borderWidth:2, padding:10}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', fontSize: 30, width:'100%', margin: 0, marginTop: 0}]}>Club Announcements</Text>
      <Text style={[{color: COLORS.white, alignSelf:'center', textAlign: 'left', fontSize: 18, width:'100%', marginLeft: 15, }]}>• NEW FBLA DEADLINE ESTABLISHED</Text>
      <Text style={[{color: COLORS.white, alignSelf:'center', textAlign: 'left', fontSize: 18, width:'100%', marginLeft: 15, }]}>• Turn in all event registration</Text>
      <Text style={[{color: COLORS.white, alignSelf:'center', textAlign: 'left', fontSize: 18, width:'100%', marginLeft: 15, }]}>• Print permission slips for SLC!</Text>
    </View>
      <View elevation={5} style={[styles.clubBlock, {width: '70%' ,flexDirection: 'column' , justifyContent: "space-around",height: 'auto',borderColor: COLORS.white, borderWidth:2, padding: 10}]}>
        <TouchableOpacity
            style={{
              height:45,
              alignItems: 'center',
              alignSelf:"center",
              justifyContent: 'center',
              width:'100%',
              borderRadius: 15,
              backgroundColor: COLORS.gray2
            }}
          >
            <Text style={[styles.buttonText, {fontSize:20}]}>View Club Gallery</Text>
          </TouchableOpacity>
      </View>
  
      </ScrollView>
  
      </View>
      </SafeAreaView>
    )
}
export default TSA;