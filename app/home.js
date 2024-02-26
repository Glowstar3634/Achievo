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
      backgroundColor: COLORS.white
    }}>
<LinearGradient
      colors={['#FFFFFF', '#E1D9CA']}
      style={{
        alignContent:'space-around',
        flexDirection: 'column',
        justifyContent:'flex-start',
        flex:9,
        width:'100%',
       
      }}
    >
    <View style={{flex:1, width:'100%'}}>
    <Text style={styles.screenHeader}>W E L C O M E   B A C K</Text>
    <Text style={styles.screenSubHeader}>{name}</Text>
    </View>


    <View style={{flex:4, height: '100%',width: '100%', display:'flex', marginTop:-45}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    <View style={{marginBottom:30, width: '100%', marginTop:10}}>
    <TextInput
        style={{width: 300, height: 40, backgroundColor: '#D2E4DA', borderRadius: 20, paddingHorizontal: 20, height:50, width:370, marginLeft:20, marginBottom:-133, marginTop:10}} // Example styling for TextInput
        placeholder="Search organizations here..." // Placeholder text
        placeholderTextColor={'black'}
        // Add any other TextInput props you need
        />
        <View style={{width:55,height:55,backgroundColor:'#FA8072', borderRadius:12, marginTop:80, marginLeft:340}}>
        </View>
        <View style={{marginTop:-40,marginLeft:355}}>
            <Ionicons name="ios-search" size={24} color="black" />
        </View>
      
    </View>

    <View elevation={5} style={[styles.orgBlock, {borderColor: COLORS.primary, borderWidth:10}]}>
      <Text style={styles.orgBlockHeader}>FBLA</Text>
      <Text style={styles.orgBlockSubHeader}>2 New Posts</Text>
    </View>

    <View style={[styles.orgBlock, {borderColor: COLORS.secondary, borderWidth:10}]}>
      <Text style={styles.orgBlockHeader2}>Dance Academy of Metuchen</Text>
      <Text style={styles.orgBlockSubHeader}>1 New Post</Text>
    </View>

    <View style={[styles.orgBlock, {borderColor: COLORS.tertiary, borderWidth:10}]}>
      <Text style={styles.orgBlockHeader}>TSA</Text>
      <Text style={styles.orgBlockSubHeader}>3 New Posts</Text>
    </View>

    <Text style={{alignSelf:"flex-end", marginRight:25, fontSize:20, marginTop:20}}>View All {'\>\>'}</Text>

    <View style={{flex:1, width:'100%'}}>
    <Text style={styles.screenSubHeader}>Finish your portfolio:</Text>
    
    <View style={{width:380,height:200,backgroundColor:'#C5D6E4', borderRadius:40,alignItems: 'center',
        alignSelf:"center",marginTop:10}}>
        <Image
        style={{width:130, height:130, marginRight:240, borderRadius:40, marginTop:10}}
        source={require('../app/pfp.png')}
        />
        <Text style={{marginLeft:100, fontWeight:'bold', fontSize:30, marginTop:-120, marginRight:30}}>
          Ethan   Poon
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
    
</LinearGradient>
    </SafeAreaView>
  )
}

export default HomeScreen;