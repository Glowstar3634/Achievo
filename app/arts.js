import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ArtsScreen = () => {
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
    <Text style={styles.screenHeader}>THE ARTS</Text>
    </View>


    <View style={{flex:6, height: '100%',width: '100%', display:'flex'}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>

    <View elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={styles.clubBlockHeader}>Music: Concert Violin</Text>
      <Image
        style={{width:115, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/Violin_PNG_Clipart-899.png')}
        />
    </View>

    <View elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={styles.clubBlockHeader}>Drama: Theater Playwriting and directing</Text>
      <Image
        style={{width:115, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/Gold_Theater_Masks_PNG_Clipart_Image.png')}
        />
    </View>

    <View elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={styles.clubBlockHeader}>Dance: Classical Ballet</Text>
      <Image
        style={{width:115, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/ballet.png')}
        />
    </View>

    <View elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={styles.clubBlockHeader}>Craft: Painting</Text>
      <Image
        style={{width:115, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/paint_palette.png')}
        />
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
            source={require('../constants/images/UIcons/theater-masks-2815.png')}
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

export default ArtsScreen;