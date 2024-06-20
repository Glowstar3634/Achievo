import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImageManipulator from 'react-native-image-manipulator';
const Gallery = () => {
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
      
      <Text style={styles.screenHeader}>Concert Violin</Text>
      <Text style={styles.screenHeader}>Gallery</Text>
      </View>
  
      <View style={{flex:3, height: '100%',width: '100%', display:'flex'}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    <View style={{
      flexDirection:'row',
      width: '100%',
      height: 125
    }}>
      <TouchableOpacity style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      
      }} onPress={() => Linking.openURL('https://youtu.be/I03Hs6dwj7E?si=iJ19EzcBZsiWtMAX')}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 50, borderColor: COLORS.white, borderWidth:2}}
              source={require('../constants/images/UIcons/violing1.jpg')}
              resizeMode='cover'
            />
      </TouchableOpacity>
      <View style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 50, borderColor: COLORS.white, borderWidth:2}}
              source={require('../constants/images/UIcons/violing2.jpg')}
              resizeMode='cover'
            />
      </View>
      <View style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 50, borderColor: COLORS.white, borderWidth:2}}
              source={require('../constants/images/UIcons/violing3.jpg')}
              resizeMode='cover'
            />
      </View>
      

    </View>
    <View style={{
      flexDirection:'row',
      width: '100%',
      height: 125
    }}>
      <View style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 50, borderColor: COLORS.white, borderWidth:2}}
              source={require('../constants/images/UIcons/violing4.jpg')}
              resizeMode='cover'
            />
      </View>
      <View style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 50, borderColor: COLORS.white, borderWidth:2}}
              source={require('../constants/images/UIcons/violing5.jpg')}
              resizeMode='cover'
            />
      </View>
      <View style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 50, borderColor: COLORS.white, borderWidth:2}}
              source={require('../constants/images/UIcons/violing6.jpg')}
              resizeMode='cover'
            />
      </View>
      

    </View>
    <View style={{
      flexDirection:'row',
      width: '100%',
      height: 125
    }}>
      <View style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '50%',height:'50%', borderRadius: 50, borderColor: COLORS.white, borderWidth:0, alignSelf:'center'}}
              source={require('../constants/images/UIcons/icons8-plus-48.png')}
              resizeMode='cover'
            />
      </View>
      <View style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 50, borderColor: COLORS.white, borderWidth:0}}
              
              resizeMode='cover'
            />
      </View>
      <View style={{
      flexDirection:'column',
      height: 125,
      flex:1,
      margin:10,
      justifyContent:'center'
      }}>
      <Image
              style={{ width: '100%',height:'100%', borderRadius: 50, borderColor: COLORS.white, borderWidth:0}}
              
              resizeMode='cover'
            />
      </View>
      

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

    </ScrollView>

    </View>

      </SafeAreaView>
    )
}
export default Gallery;