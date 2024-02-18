import { StyleSheet } from "react-native";
import { COLORS } from "./theme";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    safeContain:{
        alignContent:'center',
        flexDirection: 'column'
    },
    buttonStart: {
        height:75,
        alignItems: 'center',
        alignSelf:"center",
        justifyContent: 'center',
        width:'90%',
        borderRadius: 15,
    },
    buttonText: {
      fontSize: 25,
      fontWeight:'bold',
      color: 'white',
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: COLORS.secondary
    },
    signUpButton: {
      marginTop: 50,
      backgroundColor: COLORS.primary
    },
    startHeaders:{
        fontSize: 50,
        marginTop: 40,
        color: 'black',
        width:'100%',
        textAlign: 'center',
        fontWeight: 'bold',
        alignItems:'center'
    },
    startDescs:{
        fontSize: 15,
        marginTop: 10,
        color: 'black',
        width:'100%',
        textAlign: 'center',
        alignItems:'center'
    },
    startInput: {
        height:'100%',
        alignItems: 'center',
        alignSelf:"center",
        justifyContent: 'center',
        width:'100%',
        padding:10,
        color:'black'
    },
    startInputHint: {
        fontSize: 12,
        marginTop: 10,
        marginBottom:3,
        paddingLeft:8,
        color: 'black',
        width:'70%',
        alignSelf:'center',
        alignItems:'center'
    },
    startInputArea: {
        height:50,
        alignItems: 'center',
        alignSelf:"center",
        justifyContent: 'center',
        width:'70%',
        borderRadius: 20,
        backgroundColor: COLORS.light
    },
    screenHeader:{
        fontSize: 50,
        marginTop: 40,
        marginLeft: 30,
        color: 'black',
        width:'100%',
        textAlign: 'left',
        fontWeight: 'bold',
        alignItems:'center',
        letterSpacing:2
    },
    lineBreak:{
        width:'100%',
        backgroundColor:COLORS.gray,
        height:5,
        marginTop:3,
        marginBottom:3
    },
    screenSubHeader:{
        fontSize: 30,
        margin: 10,
        marginLeft: 40,
        color: 'black',
        width:'100%',
        alignSelf:"flex-start",
        textAlign: 'left',
    },
    orgBlock:{
        height: 100,
        alignItems: 'center',
        alignSelf:"center",
        justifyContent: 'flex-start',
        width:'85%',
        borderRadius: 20,
        backgroundColor:COLORS.lightGray,
        margin:10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    orgBlockHeader:{
        fontSize: 25,
        marginTop: 5,
        color: 'black',
        fontWeight:'bold',
        width:'90%',
        textAlign: 'left',
        alignItems:'center'
    },
    orgBlockSubHeader:{
        fontSize: 25,
        marginTop: 5,
        color: 'black',
        width:'90%',
        textAlign: 'left',
        alignItems:'center'
    }
});

export default styles;
