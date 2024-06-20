import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = ({route}) => {
  const navigation = useNavigation();
  const {input} = route.params;
  var name = "Ethan Poon";
  const [orgSearch, onOrgUpdate] = React.useState('');
  const [passwordInput, onPasswordUpdate] = React.useState('');
  var searched = 0;

  if(input === "Nova Travis"){
    searched = 1;
  }
  if(input === "ScienceOlympiad"){
    searched = 2;
  }
  if(input === "Kumon"){
    searched = 3;
  }

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
    <Text style={styles.screenBio}>Search Results for: {'\n'}"{input}"</Text>
    
    
    </View>

    <View style={{flex:3, height: '100%',width: '100%', display:'flex'}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    <View style={{ 
        height:4,
        width:'100%',
        marginTop:4,
        marginBottom:4,
        flexDirection: "row",
        backgroundColor:COLORS.dark1
      }}>
        
      </View>
    <Text style={[styles.screenBio,{margin:0, alignSelf:'center', width:'90%', textAlign:'left'}]}>People</Text>
    {searched == 1 && (<TouchableOpacity style={{width:380, height:200, backgroundColor:COLORS.dark2,borderColor: COLORS.white, borderWidth:2, borderRadius:10,shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0, shadowColor: COLORS.secondary, borderRadius:40,alignItems: 'center',
        alignSelf:"center",marginTop:10}} onPress= {() => navigation.navigate('Nova')}>
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
        
    </TouchableOpacity>)}
    {searched !== 1 && (<Text style={[styles.screenHeader,{fontSize:20}]}>No Results</Text>)}
    <View style={{ 
        height:4,
        width:'100%',
        marginTop:4,
        marginBottom:4,
        flexDirection: "row",
        backgroundColor:COLORS.dark1
      }}>
        
      </View>
    <Text style={[styles.screenBio,{margin:0, alignSelf:'center', width:'90%', textAlign:'left'}]}>Organizations</Text>
    
    {searched == 2 && (<TouchableOpacity elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]} onPress={() => navigation.navigate('')}>
      <Text style={styles.clubBlockHeader}>Science Olympiad</Text>
      <Image
        style={{width:115, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/scioly.png')}
        />
    </TouchableOpacity>)}

    {searched == 3 && (<TouchableOpacity elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]} onPress={() => navigation.navigate('Kumon')}>
      <Text style={styles.clubBlockHeader}>Kumon</Text>
      
      <Image
        style={{width:115, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/kumon.png')}
        />
    </TouchableOpacity>)}

    {searched == 1 && (<Text style={[styles.screenHeader,{fontSize:20}]}>No Results</Text>)}

    </ScrollView>

    </View>
    </SafeAreaView>
  )
}

export default SearchScreen;