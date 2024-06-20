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
      <View style={{justifyContent:'space-between', flexDirection:'row'}}>
      <TouchableOpacity style={{flexDirection:'row', marginTop: 20, backgroundColor: COLORS.dark1, width:100, height:40, borderRadius: 20}} onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 10}}
              source={require('../constants/images/UIcons/left-arrow-6404.png')}
              tintColor={"white"}
              resizeMode='contain'
            />
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', flexDirection:'row', marginTop: 20, backgroundColor: COLORS.primary, width:100, height:40, borderRadius: 20}} onPress={() => navigation.goBack()}>
            <Text style={[styles.buttonText,{fontSize:15, width:'100%', textAlign:'center'}]}>Edit</Text>
            </TouchableOpacity>
      </View>
      <Text style={styles.screenHeader}>Tennis</Text>
      </View>
  
      <View style={{flex:3, height: '100%',width: '100%', display:'flex'}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    <View style={{
      flexDirection:'row',
      width:'65%',
      height: 250
    }}>
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

    </View>
    <Text style={[styles.screenBio, {fontSize:20}]}>“I am a passionate student competing in multiple sports at the national level. I hope to teach others for my love of fitness”</Text>
    <View style={{ 
        height:4,
        width:'100%',
        marginTop:4,
        marginBottom:4,
        flexDirection: "row",
        backgroundColor:COLORS.dark1
      }}>
        
      </View>
    <Text style={[styles.screenBio,{margin:0, alignSelf:'center', width:'90%', textAlign:'left'}]}>AWARDS</Text>
    <View style={{height:150}}>
        <ScrollView horizontal={true} contentContainerstyle={styles.top}>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.clubBlock, {borderRadius: 25, height:100, width:100, alignContent: 'center', shadowColor: '#fffb00',shadowRadius: 10, borderColor: COLORS.secondary}]}>
        <Image
            style={{  width: '100%', height: '85%', alignSelf:"center", resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/icons8-warranty-50.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>Award 1</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.clubBlock, {borderRadius: 25, height:100, width:100, alignContent: 'center', shadowColor: '#fffb00',shadowRadius: 10, borderColor: COLORS.secondary}]}>
        <Image
            style={{  width: '100%', height: '85%', alignSelf:"center", resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/icons8-warranty-50.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>Award 2</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.clubBlock, {borderRadius: 25, height:100, width:100, alignContent: 'center', shadowColor: '#fffb00',shadowRadius: 10, borderColor: COLORS.secondary}]}>
        <Image
            style={{  width: '100%', height: '85%', alignSelf:"center", resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/icons8-warranty-50.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>Award 3</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.clubBlock, {borderRadius: 25, height:100, width:100, alignContent: 'center', shadowColor: '#fffb00',shadowRadius: 10, borderColor: COLORS.secondary}]}>
        <Image
            style={{  width: '100%', height: '85%', alignSelf:"center", resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/icons8-warranty-50.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>Award 4</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.clubBlock, {borderRadius: 25, height:100, width:100, alignContent: 'center', shadowColor: '#fffb00',shadowRadius: 10, borderColor: COLORS.secondary}]}>
        <Image
            style={{  width: '100%', height: '85%', alignSelf:"center", resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/icons8-warranty-50.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>Award 5</Text>
        </View>

        </ScrollView>
        </View>
    <View style={{ 
        height:4,
        width:'100%',
        marginTop:4,
        marginBottom:4,
        flexDirection: "row",
        backgroundColor:COLORS.dark1
      }}>
        
      </View>
    <Text style={[styles.screenBio,{margin:0, alignSelf:'center', width:'90%', textAlign:'left'}]}>PROGRAMS</Text>
    <View style={{height:150}}>
        <ScrollView horizontal={true} contentContainerstyle={styles.top}>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.clubBlock, {borderRadius: 25, height:100, width:100, alignContent: 'center', shadowColor: '#fffb00',shadowRadius: 10, borderColor: COLORS.secondary}]}>
        <Image
            style={{  width: '100%', height: '85%', alignSelf:"center", resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/icons8-multiple-stars-24.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>Program 1</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.clubBlock, {borderRadius: 25, height:100, width:100, alignContent: 'center', shadowColor: '#fffb00',shadowRadius: 10, borderColor: COLORS.secondary}]}>
        <Image
            style={{  width: '100%', height: '85%', alignSelf:"center", resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/icons8-multiple-stars-24.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>Program 2</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.clubBlock, {borderRadius: 25, height:100, width:100, alignContent: 'center', shadowColor: '#fffb00',shadowRadius: 10, borderColor: COLORS.secondary}]}>
        <Image
            style={{  width: '100%', height: '85%', alignSelf:"center", resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/icons8-multiple-stars-24.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>Program 3</Text>
        </View>

        </ScrollView>
        </View>

        <View elevation={5} style={[styles.clubBlock, {width: '95%' ,flexDirection: 'column' , justifyContent: "space-around",height: 'auto',borderColor: COLORS.white, borderWidth:2, padding: 10}]}>
        <TouchableOpacity
            style={{
              height:100,
              alignItems: 'center',
              alignSelf:"center",
              justifyContent: 'space-around',
              width:'100%',
              borderRadius: 15,
              backgroundColor: COLORS.gray2
            }}
          >
          <Image
              style={{ width: '95%',height: 60}}
              source={require('../constants/images/UIcons/photo-1909.png')}
              resizeMode='contain'
            />
            <Text style={[styles.buttonText, {fontSize:30}]}>View Gallery</Text>
          </TouchableOpacity>
      </View>
      <View elevation={5} style={[styles.clubBlock, {width: '95%' ,flexDirection: 'column' , justifyContent: "space-around",height: 'auto',borderColor: COLORS.white, borderWidth:2, padding: 10}]}>
        <TouchableOpacity
            style={{
              height:60,
              alignItems: 'center',
              alignSelf:"center",
              justifyContent: 'space-around',
              width:'100%',
              borderRadius: 15,
              backgroundColor: COLORS.gray2
            }}
          >
            <Text style={[styles.buttonText, {fontSize:30}]}>Statistics</Text>
          </TouchableOpacity>
      </View>

    </ScrollView>

    </View>

      </SafeAreaView>
    )
}
export default TennisScreen;