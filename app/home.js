import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  var name = "Nova Travis";
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

    <View style={{flex:1, width:'100%'}}>
    <Text style={styles.screenHeader}>Welcome Back</Text>
    <Text style={styles.screenSubHeader}>{name}</Text>
    </View>

    <View style={styles.lineBreak}>

    </View>

    <View style={{flex:4, height: '100%',width: '100%', display:'flex'}}>
    <ScrollView  contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}>
    <View style={{marginBottom:20, width: '100%'}}>
        <Text style={styles.startInputHint}>Which Organizations?</Text>
        <View style={styles.startInputArea}>
          <TextInput 
            style={styles.startInput}
            onChangeText={orgSearch => onOrgUpdate(orgSearch)}
            defaultValue= {orgSearch}
          />
        </View>
    </View>

    <View elevation={5} style={[styles.orgBlock, {borderColor: COLORS.primary, borderWidth:10}]}>
      <Text style={styles.orgBlockHeader}>FBLA</Text>
      <Text style={styles.orgBlockSubHeader}>2 New Posts</Text>
    </View>

    <View style={[styles.orgBlock, {borderColor: COLORS.secondary, borderWidth:10}]}>
      <Text style={styles.orgBlockHeader}>Chess Club</Text>
      <Text style={styles.orgBlockSubHeader}>1 New Posts</Text>
    </View>

    <View style={[styles.orgBlock, {borderColor: COLORS.tertiary, borderWidth:10}]}>
      <Text style={styles.orgBlockHeader}>TSA</Text>
      <Text style={styles.orgBlockSubHeader}>3 New Posts</Text>
    </View>

    <Text style={{alignSelf:"flex-end", marginRight:25, fontSize:25}}>View All {'\>\>'}</Text>

    <View style={{flex:1, width:'100%'}}>
    <Text style={styles.screenSubHeader}>Finish your portfolio:</Text>

    </View>

    </ScrollView>
    </View>
    

    </SafeAreaView>
  )
}

export default HomeScreen;