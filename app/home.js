import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
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
    <Text style={styles.screenHeader}>HI! I'M ETHAN!</Text>
    <Text style={[styles.screenHeader, {marginTop: 20, fontSize:25, fontWeight:'normal'}]}>View/Edit your portfolio:</Text>
    </View>


    <View style={[{
          height:80, 
          margin:5,
          alignSelf: 'center',
          borderRadius: 30,
          width: '95%',
          flexDirection:'row',
          justifyContent:'space-around',
          backgroundColor: COLORS.dark
        }, styles.sectionShadow]}>
        <View style={{height:100}}>
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
      </View>


    <View style={{flex:4, height: '100%',width: '100%', display:'flex', margin:10}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    <View style={{marginBottom:30, width: '100%', marginTop:10}}>
    <TextInput
        style={{width: 300, height: 40, backgroundColor: COLORS.dark2, borderRadius: 20, paddingHorizontal: 20, height:50, width:370, marginLeft:20, marginBottom:-133, marginTop:10}} // Example styling for TextInput
        placeholder="Search people, organizations, etc..." // Placeholder text
        placeholderTextColor={'white'}
        // Add any other TextInput props you need
        />
        <View style={{width:55,height:55,backgroundColor:COLORS.secondary, borderRadius:12, marginTop:80, marginLeft:340}}>
        </View>
        <View style={{marginTop:-40,marginLeft:355}}>
            <Ionicons name="ios-search" size={24} color="black" />
        </View>
      
    </View>

    <View elevation={5} style={[styles.clubBlock, {height: 'auto', width: '75%', shadowColor: COLORS.secondary, borderColor: COLORS.white, borderWidth:2, borderRadius:10}]}>
      <Text style={[styles.clubBlockHeader, {margin:15, marginTop:15, width:'100%'}]}>FBLA: 2 New Posts</Text>
    </View>

    <View elevation={5} style={[styles.clubBlock, {height: 'auto', width: '75%', shadowColor: COLORS.secondary, borderColor: COLORS.white, borderWidth:2, borderRadius:10}]}>
      <Text style={[styles.clubBlockHeader, {margin:15, marginTop:15, width:'100%'}]}>Dance Academy: 1 New Post</Text>
    </View>

    <View elevation={5} style={[styles.clubBlock, {height: 'auto', width: '75%', shadowColor: COLORS.secondary, borderColor: COLORS.white, borderWidth:2, borderRadius:10}]}>
      <Text style={[styles.clubBlockHeader, {margin:15, marginTop:15, width:'100%'}]}>TSA: 3 New Posts</Text>
    </View>

    <Text style={{alignSelf:"flex-end", marginRight:25, fontSize:20, marginTop:10, color: COLORS.white}}>View All {'\>\>'}</Text>

    <View style={{flex:1, width:'100%'}}>
    <Text style={[styles.screenHeader, {marginTop: 20, fontSize:25, fontWeight:'normal'}]}>Export your portfolio:</Text>
    
    <View style={{width:380,height:200,backgroundColor:'#C5D6E4',shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0, shadowColor: COLORS.secondary, borderRadius:40,alignItems: 'center',
        alignSelf:"center",marginTop:10}}>
        <Image
        style={{width:130, height:130, marginRight:240, borderRadius:40, marginTop:10}}
        source={require('../app/pfp.png')}
        />
        <Text style={{marginLeft:100, fontWeight:'bold', fontSize:30, marginTop:-120, marginRight:30}}>
          Ethan Poon
        </Text>
        <Text style={{marginLeft:100, fontWeight:'bold', fontSize:20, marginRight:-40, marginTop:20}}>
          Major: Computer Science
        </Text>
        <Text style={{marginLeft:100, fontWeight:'bold', fontSize:20, marginRight:20, marginTop:20}}>
          Grade: 11th / Junior
        </Text>
        <Text style={{marginLeft:100, fontWeight:'bold', fontSize:20, marginRight:30, marginTop:20}}>
          Location: NJ, USA
        </Text>
        
    </View>

    </View>

    </ScrollView>

    </View>
    </SafeAreaView>
  )
}

export default HomeScreen;