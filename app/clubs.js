import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';
import React, {useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ClubsScreen = () => {
  const navigation = useNavigation();
  var name = "Ethan Poon";
  const [orgSearch, onOrgUpdate] = React.useState('');
  const [passwordInput, onPasswordUpdate] = React.useState('');

  const [showDescriptions, setShowDescriptions] = useState({});

  const toggleDescription = (descriptionIndex) => {
  setShowDescriptions(prevState => ({
    ...prevState,
    [descriptionIndex]: !prevState[descriptionIndex]
  }));
};

const handleTSA = () => {
  navigation.navigate('TSA');
};

  return (
    <SafeAreaView style={{
      flex:1,
      display:'flex',
      alignItems:'center',
      justifyContent:'flex-start',
      backgroundColor: COLORS.dark
    }}>
    <View style={{flex:1, width:'100%'}}>
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
    <Text style={styles.screenHeader}>CLUBS</Text>
    </View>


    <View style={{flex:6, height: '100%',width: '100%', display:'flex'}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]} onPress={handleTSA}>
      <Text style={styles.clubBlockHeader}>FBLA: Future Business Leaders of America</Text>
      <Image
        style={{width:115, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/FBLA-Crest-FINAL-RGB-01-e1658431231682-300x300.png')}
        />
    </TouchableOpacity>
    <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleDescription(2)}>
              <View style={styles.triangleDown}></View>
            </TouchableOpacity>
            {showDescriptions[2] && (
              <View style={styles.descriptionBox}>
                <Text style={{color: 'white', fontWeight:'bold'}}>The FBLA mission is to bring business and education together in a positive working relationship through innovative leadership and career development programs.</Text>
              </View>
            )}
          </View>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2, justifyContent: 'center',alignItems: 'center',}]}>
      <Text style={styles.clubBlockHeader}>TSA: Technology Student Association</Text>
      <Image
        style={{width:100, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/tsa-logoff2c085a4556450589a0a1a426c8e98f.png')}
        />
    </TouchableOpacity>
    <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleDescription(1)}>
              <View style={styles.triangleDown}></View>
            </TouchableOpacity>
            {showDescriptions[1] && (
              <View style={styles.descriptionBox}>
                <Text style={{color: 'white', fontWeight:'bold'}}>Description 1...</Text>
              </View>
            )}
          </View>
    
    <TouchableOpacity elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={styles.clubBlockHeader}>GSA: Garden State Attack Volleyball</Text>
      <Image
        style={{width:115, height:115, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/GSA-Logo-2019-new.png')}
        />
    </TouchableOpacity>
    <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleDescription(3)}>
              <View style={styles.triangleDown}></View>
            </TouchableOpacity>
            {showDescriptions[3] && (
              <View style={styles.descriptionBox}>
                <Text style={{color: 'white', fontWeight:'bold'}}>Description 3...</Text>
              </View>
            )}
          </View>

    <TouchableOpacity elevation={5} style={[styles.clubBlock, {borderColor: COLORS.white, borderWidth:2}]}>
      <Text style={styles.clubBlockHeader}>Revvifi Consulting</Text>
      <Image
        style={{width:100, height:100, borderRadius:30, resizeMode:'contain'}}
        source={require('../constants/images/UIcons/revvifi.png')}
        />
    </TouchableOpacity>
    <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleDescription(4)}>
              <View style={styles.triangleDown}></View>
            </TouchableOpacity>
            {showDescriptions[4] && (
              <View style={styles.descriptionBox}>
                <Text style={{color: 'white', fontWeight:'bold'}}>Description 4...</Text>
              </View>
            )}
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

export default ClubsScreen;