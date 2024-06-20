import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking} from 'react-native'
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
    const MyButton = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
    
   
      const handleButtonPress = () => {
        // You can replace the URL with the desired link
        const url = 'https://www.njfbla.org/';
        Linking.openURL(url);
      };
    
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

      <View style={{flex:3, height: '100%',width: '100%', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
      
    
      <View style={{
      flexDirection:'row',
      width:'95%',
      height: 200,
      marginBottom:30
    }}>
    <View style={{
      flexDirection:'column',
      flex:1.5,
      width:'95%'
      
      }}>
      <TouchableOpacity style={{ marginLeft:20,width: 70,height:70}} onPress={() => Linking.openURL('https://www.instagram.com/njfbla?igsh=ZnFzbmVra2d0cDB4')}>
      <Image
              style={{ width: '100%',height:'100%'}}
              source={require('../constants/images/brand/linkedin.png')}
            />
      </TouchableOpacity>
      
      <TouchableOpacity style={{ marginLeft:20,width: 75,height:95, marginTop:70}} onPress={() => Linking.openURL('https://www.facebook.com/njfbla?mibextid=LQQJ4d')}>
      <Image
              style={{ width: '100%',height:'100%'}}
              source={require('../constants/images/brand/facebook.png')}
            />
      </TouchableOpacity>
      
      </View>
      <View style={{
      flexDirection:'column',
      flex:3,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 100, borderColor: COLORS.white, borderWidth:2}}
              source={require('../constants/images/UIcons/FBLA-Crest-FINAL-RGB-01-e1658431231682-300x300.png')}
              
            />
          
      </View>
      <View style={{
      flexDirection:'column',
      flex:1.5,
      width:'95%'
      }}>
      <TouchableOpacity style={{width: 75,height:95, marginTop:-15}} onPress={() => Linking.openURL('mailto:kclark@njfbla.org')}>
      <Image
                style={{width: '100%',height:'100%'}}
                source={require('../constants/images/brand/gmail.png')}
              />
      </TouchableOpacity>
      
      <TouchableOpacity style={{width: 75,height:75, marginTop:55}}>
      <Image
                style={{width: '100%',height:'100%', borderRadius:20}}
                source={require('../constants/images/brand/insta.jpg')}
              />
      </TouchableOpacity>
      
      </View>

    </View>
    </View>

    


      <View elevation={5} style={[styles.clubBlock, {height: 'auto', flexDirection: 'column', borderColor: COLORS.white, borderWidth:2, padding:10}]}>
      <Text style={[styles.clubBlockHeader, {alignSelf:'center', textAlign: 'center', fontSize: 30, width:'100%', margin: 20, marginTop: 0}]}>Club Announcements</Text>
      <Text style={[{color: COLORS.white, alignSelf:'center', textAlign: 'left', fontSize: 18, width:'100%', marginTop:10, marginLeft: 15}]}>• NEW FBLA DEADLINE ESTABLISHED</Text>
      <Text style={[{color: COLORS.white, alignSelf:'center', textAlign: 'left', fontSize: 18, width:'100%', marginTop:10,marginLeft: 15, }]}>• Turn in all event registration</Text>
      <Text style={[{color: COLORS.white, alignSelf:'center', textAlign: 'left', fontSize: 18, width:'100%', marginTop:10, marginLeft: 15, }]}>• Print permission slips for SLC!</Text>
    </View>
      <View elevation={5} style={[styles.clubBlock, {width: '70%' ,flexDirection: 'column' , justifyContent: "space-around",height: 'auto',borderColor: COLORS.white, borderWidth:2, padding: 10}]}>
        <TouchableOpacity onPress={handleButtonPress}
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
            
            <Text style={[styles.buttonText, {fontSize:18}]}>{"Check out our chapter website"}</Text>
          </TouchableOpacity>
      </View>
  
      </ScrollView>
  
      </View>
      </SafeAreaView>
    )
}



export default TSA;

