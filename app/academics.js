import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AcademicsScreen = () => {
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
    <View style={{justifyContent:'space-between', flexDirection:'row'}}>
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
            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', flexDirection:'row', marginTop: 20, backgroundColor: COLORS.primary, width:100, height:40, borderRadius: 20}} onPress={() => navigation.goBack()}>
            <Text style={[styles.buttonText,{fontSize:15, width:'100%', textAlign:'center'}]}>Edit</Text>
            </TouchableOpacity>
      </View>
    <Text style={styles.screenHeader}>ACADEMICS</Text>
    <Text style={styles.screenBio}>“I am a passionate student about computer science with real world experience with internships and use skills to help my community“</Text>
    </View>

    <View style={{flex:3, height: '100%',width: '100%', display:'flex'}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    <View style={{
      flexDirection:'row',
      width:'95%'
    }}>
      <View style={{
      flexDirection:'column',
      flex:1,
      width:'95%'
      }}>
      <View elevation={5} style={[styles.clubBlock, {flexDirection: 'column' ,height: 180, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {width:150, textAlign: 'center'}]}>Current GPA:</Text>
      <Text style={[styles.clubBlockHeader, {width:175, margin:5, textAlign: 'center', marginTop:0, color: COLORS.white}]}>3.98 / 4.0 UW{'\n'}4.60 / 4.0 W{'\n'}Class Rank: 10%</Text>

    </View>

    <View elevation={5} style={[styles.clubBlock, {flexDirection: 'column' , height: 180, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {width:150, fontSize: 15, textAlign: 'center'}]}>Standardized Tests:</Text>
      <Text style={[styles.clubBlockHeader, {width:175, margin:5, textAlign: 'center', marginTop:0, color: COLORS.white}]}>SAT: 1590{'\n'}ACT: N/A{'\n'}AP Tests: 12</Text>
    </View>
      </View>
      <View style={{
      flexDirection:'column',
      flex:1,
      width:'95%'
      }}>
      <View elevation={5} style={[styles.clubBlock, {flexDirection: 'column' ,height: 380, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {width:150, fontSize: 22, textAlign: 'center'}]}>Past Coursework:</Text>
      <Text style={[styles.clubBlockHeader, {width:175, margin:5, textAlign: 'center', marginTop:0, color: COLORS.white}]}>AP:{'\n'}12 Classes{'\n\n'}IB:{'\n'}5 Classes{'\n\n'}Dual Enrollment:{'\n'}2 Classes</Text>
    </View>
      </View>

    </View>
    <View elevation={5} style={[styles.clubBlock, {flexDirection: 'column' , justifyContent: "space-around",height: 100,borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {margin:0, marginTop:0,width:'100%', fontSize: 30, textAlign: 'center'}]}>Transcript</Text>
      <TouchableOpacity
          style={{
            height:45,
            alignItems: 'center',
            alignSelf:"center",
            justifyContent: 'center',
            width:'60%',
            borderRadius: 15,
            backgroundColor: COLORS.gray2
          }}
        >
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
    </View>

    </ScrollView>

    <View style={[{
          height:60,
          alignSelf: 'center',
          borderRadius: 30,
          margin: 20,
          width: '95%',
          flexDirection:'row',
          justifyContent:'space-around',
          backgroundColor: COLORS.light
        }, styles.sectionShadow]}>
        <TouchableOpacity style={[styles.safeContain, {width:'15%', margin:6}]} onPress={() => navigation.navigate('Clubs')}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/users-267.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.safeContain, {width:'15%', margin:6}]} onPress={() => navigation.navigate('Academics')}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/education-graduate-black-21080.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.safeContain, {width:'15%', margin:6}]} onPress={() => navigation.navigate("Arts")}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/music-note.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.safeContain, {width:'15%', margin:6}]} onPress={() => navigation.navigate("Athletics")}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/running-shoes-8592.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.safeContain, {width:'15%', margin:6}]} onPress={() => navigation.navigate("Service")}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/black-grow-plant-17106.png')}
        />
        </TouchableOpacity>
      </View>

    </View>
    </SafeAreaView>
  )
}

export default AcademicsScreen;