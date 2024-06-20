import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Nova = () => {
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
    <Text style={styles.screenHeader}>HI! I'M NOVA!</Text>
    <Text style={[styles.screenHeader, {marginTop: 20, fontSize:25, fontWeight:'normal'}]}>View User's Portfolio:</Text>
    </View>


    <View style={[{
          margin:5,
          height:400,
          alignSelf: 'center',
          borderRadius: 30,
          width: '95%',
          flexDirection:'row',
          justifyContent:'space-around',
          backgroundColor: COLORS.dark
        }, styles.sectionShadow]}>
        
        <ScrollView horizontal={true} contentContainerstyle={styles.top}>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2, width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate('Clubs')}>
        <Image
            style={{  width: '60%', height: '85%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/users-267.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>CLUBS</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2, width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate('Academics')}>
        <Image
            style={{  width: '70%', height: '90%', alignSelf:"center",margin: 3, resizeMode:'contain', marginBottom:40}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/education-graduate-black-21080.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>ACADEMICS</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2 ,width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate("Arts")}>
        <Image
            style={{  width: '60%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/music-note.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>ARTS</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2, width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate("Athletics")}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/running-shoes-8592.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>ATHLETICS</Text>
        </View>

        <View style={{height:60, marginRight:20}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2, width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate("Service")}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/black-grow-plant-17106.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>SERVICE</Text>
        </View>
        
        </ScrollView>
      </View>


    <View style={{height:'auto', width: '100%',margin:10}}>
    <TouchableOpacity style={{width:380, height:200, backgroundColor:COLORS.dark2,borderColor: COLORS.white, borderWidth:2, borderRadius:10,shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0, shadowColor: COLORS.secondary, borderRadius:40,alignItems: 'center',
        alignSelf:"center",marginTop:10}}>
        <Image
        style={{width:130, height:130, marginRight:240, borderRadius:40, marginTop:10,borderColor: COLORS.white, borderWidth:2}}
        source={require('../app/novaP.png')}
        />
        <Text style={{color: 'white', marginLeft:100, fontWeight:'bold', fontSize:30, marginTop:-120, marginRight:30}}>
          Nova Travis
        </Text>
        <Text style={{color: 'white', marginLeft:100, fontWeight:'bold', fontSize:15, marginRight:-40, marginTop:20}}>
          Major: Particle Physics
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

export default Nova;