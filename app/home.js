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
      backgroundColor: COLORS.darkness
    }}>
    <View style={{width: "100%"}}>
    <Text style={[styles.screenHeader, {marginTop:20, marginLeft:20}]}>Welcome, Ethan</Text>
    </View>


    <View style={{flex:5, height: '100%',width: '100%', display:'flex', margin:10}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    <TouchableOpacity style={{width:"95%", height:200, backgroundColor:COLORS.dark2,borderColor: COLORS.white, borderWidth:2, marginBottom: 20, shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0, shadowColor: COLORS.secondary, borderRadius:20,alignItems: 'center',
        alignSelf:"center",marginTop:10, flexDirection: 'row', justifyContent: 'center'}} onPress= {() => navigation.navigate('ExportOpt')}>
        {/* Porfolio Export Button*/}
        <Image
        style={{width:130, height:130, borderRadius:40, margin:10,borderColor: COLORS.white, borderWidth:2, marginRight: 30}}
        source={require('../app/pfp.png')}
        />
        <View style={{
        }}>
        <Text style={{color: 'white', fontWeight:'bold', fontSize:30, marginBottom: 20}}>
          Ethan Poon
        </Text>
        <Text style={{color: 'white', fontWeight:'bold', fontSize:15, marginBottom: 10}}>
          Major: Computer Science
        </Text>
        <Text style={{color: 'white', fontWeight:'bold', fontSize:15, marginBottom: 10}}>
          Grade: 11th / Junior
        </Text>
        <Text style={{color: 'white', fontWeight:'bold', fontSize:15, marginBottom: 10}}>
          Location: NJ, USA
        </Text>
        </View>
        
        
    </TouchableOpacity>
    <View style={[{
          
          margin:5,
          alignSelf: 'center',
          borderRadius: 20,
          width: '95%',
          justifyContent:'space-around',
          backgroundColor: COLORS.darkness,
          borderColor: COLORS.secoDark,
          borderWidth:2
        }, styles.sectionShadow]}>
        <Text style={[styles.screenHeader, {fontSize:20, fontWeight:'normal', textAlign:'center'}]}>View/Edit your portfolio:</Text>
        <View style={{height:100, }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

        <View style={{height:60, alignItems:'center'}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2, width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate('Clubs')}>
        <Image
            style={{  width: '60%', height: '85%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/users-267.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>CLUBS</Text>
        </View>

        <View style={{height:60, alignItems:'center'}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2, width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate('Academics')}>
        <Image
            style={{  width: '70%', height: '90%', alignSelf:"center",margin: 3, resizeMode:'contain', marginBottom:40}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/education-graduate-black-21080.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>ACADEMICS</Text>
        </View>

        <View style={{height:60, alignItems:'center'}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2 ,width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate("Arts")}>
        <Image
            style={{  width: '60%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/music-note.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>ARTS</Text>
        </View>

        <View style={{height:60, alignItems:'center'}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2, width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate("Athletics")}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/running-shoes-8592.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>ATHLETICS</Text>
        </View>

        <View style={{height:60, alignItems:'center'}}>
        <TouchableOpacity style={[styles.safeContain, {borderRadius: 30, borderColor: COLORS.secondary, borderWidth:2, width:60, height:'100%', margin:6}]} onPress={() => navigation.navigate("Service")}>
        <Image
            style={{  width: '80%', height: '80%', alignSelf:"center",margin: 3, resizeMode:'contain'}}
            tintColor={COLORS.white}
            source={require('../constants/images/UIcons/black-grow-plant-17106.png')}
        />
        </TouchableOpacity>
        <Text style={styles.undericon}>SERVICE</Text>
        </View>

        </View>
        </View>
      </View>

      <View style={[{
          
          margin:5,
          alignSelf: 'center',
          borderRadius: 20,
          width: '95%',
          justifyContent:'space-around',
          backgroundColor: COLORS.darkness,
          borderColor: COLORS.secoDark,
          borderWidth:2
        }, styles.sectionShadow]}>
        <Text style={[styles.screenHeader, {fontSize:20, fontWeight:'normal', textAlign:'center'}]}>Connect</Text>
        <View style={{marginBottom:30, width: '100%', marginTop:10, flexDirection: 'row', justifyContent: 'center'}}>
    <TextInput
        style={{backgroundColor: COLORS.dark2, borderRadius: 20,paddingHorizontal: 20, height:50, width:"80%",  borderColor: COLORS.secoDark, borderWidth: 2}}
        placeholder="Search people, organizations, etc..."
        onChangeText={orgSearch => onOrgUpdate(orgSearch)}
        placeholderTextColor={COLORS.white}
        color={COLORS.white}
        />
        <TouchableOpacity style={{width:50,height:50,backgroundColor:COLORS.secondary, borderRadius:20, alignItems: 'center', justifyContent: 'center', marginLeft: -50}} onPress={()=> navigation.navigate('Search', {input: orgSearch})}>
        <View style={{}}>
            <Ionicons name="search" size={24} color="black" />
        </View>
        </TouchableOpacity>
        
      
    </View>

    <View elevation={5} style={[styles.clubBlock, {height: 'auto', width: '85%', shadowColor: COLORS.secondary, borderColor: COLORS.white, borderWidth:2, borderRadius:10}]}>
      <Text style={[styles.clubBlockHeader, {margin:15, marginTop:15, width:'100%'}]}>FBLA: 2 New Posts</Text>
    </View>

    <View elevation={5} style={[styles.clubBlock, {height: 'auto', width: '85%', shadowColor: COLORS.secondary, borderColor: COLORS.white, borderWidth:2, borderRadius:10}]}>
      <Text style={[styles.clubBlockHeader, {margin:15, marginTop:15, width:'100%'}]}>Dance Academy: 1 New Post</Text>
    </View>

    <View elevation={5} style={[styles.clubBlock, {height: 'auto', width: '85%', shadowColor: COLORS.secondary, borderColor: COLORS.white, borderWidth:2, borderRadius:10}]}>
      <Text style={[styles.clubBlockHeader, {margin:15, marginTop:15, width:'100%'}]}>TSA: 3 New Posts</Text>
    </View>

    <Text style={{alignSelf:"flex-end", marginRight:25, fontSize:20, marginTop:10, color: COLORS.white}}>View All {'\>\>'}</Text>
        </View>
    

        <View style={[{
          
          margin:5,
          alignSelf: 'center',
          borderRadius: 20,
          width: '95%',
          justifyContent:'space-around',
          backgroundColor: COLORS.darkness,
          borderColor: COLORS.secoDark,
          borderWidth:2
        }, styles.sectionShadow]}>
    <Text style={[styles.screenHeader, {fontSize:20, fontWeight:'normal', textAlign:'center'}]}>Next Steps:</Text>
    
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start', marginTop: 20}}>
    
    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 75, borderColor: COLORS.white, borderWidth:2}]} onPress={() => navigation.navigate('Resume')}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Generate Resume from Portfolio</Text>
    </TouchableOpacity>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 75, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Generate Resume with AI</Text>
    </TouchableOpacity>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 75, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Generate Website from Portfolio</Text>
    </TouchableOpacity>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 75, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Generate Website with AI</Text>
    </TouchableOpacity>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {height: 75, borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', width:'100%', margin: 0, marginTop: 0}]}>Manual Resume Creation</Text>
    </TouchableOpacity>

    </ScrollView>

    </View>

    </ScrollView>

    </View>
    </SafeAreaView>
  )
}

export default HomeScreen;