import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
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
    <Text style={styles.screenHeader}>TSA</Text>
    </View>
    </SafeAreaView>
    )
}
export default TSA;