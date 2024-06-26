import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../constants/styles';
import { COLORS } from '../constants/theme';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import * as ImageManipulator from 'react-native-image-manipulator';
import axios from 'axios';
import WebView from 'react-native-webview';
import resume1 from '../assets/template1/index.json';

const AiResumeScreen = () => {
    const navigation = useNavigation();
    var name = "Ethan Poon";
    const [displayHTML, setDisplayHTML] = React.useState(resume1.body)
    const [templateHTML, setTemplateHTML] = React.useState(resume1.body)
    const [data, setData] = React.useState([])
    const [message, onMessageUpdate] = React.useState('');
    const [jsonData, setJsonData] = React.useState({
        "personal": {  
            "fullName": "Ethan Poon",
            "school": "Edison Academy Magnet School",
            "contactInfo": {
                "email": "ewpoon007@gmail.com",
                "phone": "7323392432"
            },
            "address": null
        },
        "skills": {
            "0": "Expert programmer in Java, Kotlin, Javascript, and C++",
            "1": "Skilled in various data science applications"
        },
        "academics": {
            "weightedGPA": 4.6,
            "unweightedGPA": 3.98,
            "SAT" : 1590,
            "ACT" : null,
            "APTests" : 12,
            "APClassesTaken": 12,
            "IBClassesTaken": 5,
            "DualEnrollmentClassesTaken": 2
        },
        "organizations": {
            "0": "FBLA: Future Business Leaders of America",
            "1": "TSA: Technology Student Association",
            "2": "GSA: Garden State Attack Volleyball",
            "3": "Revvifi Consulting"
        },
        "arts": {
            "0": "Concert Violin",
            "1": "Theater Playwriting and Directing",
            "2": "Classical Ballet",
            "3": "Painting"
        },
        "athletics": {
            "0": "Tennis",
            "1": "Fencing",
            "2": "Soccer",
        },
        "service": {
            "serviceHours": 500,
            "organizations": {
                "0": "Food Flow",
                "1": "Replenish Food Drive",
                "2": "Interact Book Donation",
                "3": "Revvifi Website Design"
            }
        },
        "other": {
            "0": "NASA SEES Intern",
            "1": "Computer Science Club President",
            "2": "Professional Brawl Stars player"
        }
    })

    const [canSend, onCanSendUpdate] = React.useState(false);
    const [canRetrieve, onCanRetrieveUpdate] = React.useState(false);

    const scrollViewRef = React.useRef(null);

    React.useEffect(() => { //Logic for identifying the JSON and asterisk part of the ais message
        const timeoutId = setTimeout(() => {
            scrollToBottom();
            const tempData = [...data];
            const lastBotMessage = tempData.reverse().find(item => item.type === "bot");

        if (lastBotMessage) {
            const jsonString = lastBotMessage.message;
            const jsonStartIndex = jsonString.indexOf('{');
            const jsonEndIndex = jsonString.lastIndexOf('}') + 1;
            const jsonSubstring = jsonString.substring(jsonStartIndex, jsonEndIndex);
            const doneStartIndex = jsonString.indexOf('*');
            const doneEndIndex = jsonString.lastIndexOf('*') + 1;
            const doneSubstring = jsonString.substring(doneStartIndex, doneEndIndex);
            if (doneSubstring == '***1***'){
                console.log("Resume Done: ", doneSubstring)
                onCanRetrieveUpdate(true)
            }else{
                console.log("Resume In Progress: ", doneSubstring)
                onCanRetrieveUpdate(false)
            }

            try {
                const parsedJson = JSON.parse(jsonSubstring);
                setJsonData(parsedJson);
            } catch (error) {
                console.error('Error parsing JSON:', jsonString);
            }
        }
          }, 1000);
          
          return () => clearTimeout(timeoutId);
    }, [data]);

    const initializeResumeGen = async () => {
        try {
            const apiKey = 'Bearer sk-proj-u8UfLlCSClGzCIZtCxepT3BlbkFJxQmQDbS9p3RKlhSAb5IB';
            const apiUrl = 'https://api.openai.com/v1/chat/completions';

            // Prepares the messages array for the chat endpoint
            const messages = [
                { role: 'system', content: 'You are a resume creation bot for an app called Achievo. The first thing the user sends you will be data in a JSON format, containing information from their Achievo portfolio. Then, say \"I\'m the Acheivo AI Resume Generator!\", and give them these three options:(1. Auto-Generate from Achievo Porfolio 2. Edit and Create using Achievo Portfolio 3. Create from scratch) If they choose option 1, use the JSON data to create the portfolio. If they choose option 2, ask them what parts of their resume they would like to change. Each time they provide a change, update their portfolio. If they choose option three, replace all the values in the JSON with an empty string, and allow them to add each part of their resume individually. At the end of all of your messages, strictly add three asterisks, a number, and then another three asterisks (ex. \'***0***\' or \'***1***\'). If the user\'s resume isn\'t completed yet, the number should be 0. If it is completed, or the user says they are done, the number should be 1. Now make a new line, and then strictly add the full JSON object, and nothing more. The asterisk number and the full JSON is crucial to add at the end of ALL of your responses, even after the user says they are done making the resume.' },
                ...data.map(item => ({
                    role: item.type === 'user' ? 'user' : 'assistant',
                    content: item.message
                })),
                { role: 'user', content: JSON.stringify(jsonData) }
            ];

            const response = await axios.post(apiUrl, {
                model: 'gpt-4',
                messages: messages,
                max_tokens: 1024,
                temperature: 0.5,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': apiKey
                }
            });

            const text = response.data.choices[0].message.content.trim();
            setData(prevData => [
                ...prevData,
                { type: 'bot', message: text }
            ]);
            onMessageUpdate('');
            onCanSendUpdate(true);
        } catch (error) {
            console.error("Initialization Error:", error);
            alert(`Initialization Error: ${error.response ? error.response.data.error.message : error.message}`);
        }
    }

    React.useEffect(() => {
        initializeResumeGen()
    }, []);

    const flattenObject = (obj, parentKey = '', res = {}) => { //flatten for retriving the full keys
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const propName = parentKey ? `${parentKey}.${key}` : key;
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    flattenObject(obj[key], propName, res);
                } else {
                    res[propName] = obj[key];
                }
            }
        }
        return res;
    };
    
    React.useEffect(() => {
        updateDisplayHTML();
    }, [jsonData]);
    
    const updateDisplayHTML = () => {
        let updatedHTML = templateHTML;
        const flattenedData = flattenObject(jsonData);
        
        Object.keys(flattenedData).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            let value = escapeHtml(flattenedData[key]); // Function to escape HTML entities
    
            if (value !== undefined && value !== null) {
                updatedHTML = updatedHTML.replace(regex, value);
            } else {
                console.warn(`Value for key '${key}' is undefined or null.`);
            }
        });
    
        setDisplayHTML(updatedHTML);
    };
    
    const escapeHtml = (unsafe) => {
        if (unsafe === null || unsafe === undefined) {
            return ''; // Return empty string for undefined or null values
        }
    
        return unsafe
            .toString() // Ensure it's converted to string
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    const scrollToBottom = () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    const sendMessage = async () => {
        if (message.trim() === "") {
            alert("Message cannot be empty!");
            return;
        }
        if (!canSend){
            return;
        }
        onCanSendUpdate(false)
        setData(prevData => [
            ...prevData,
            { type: 'user', message: message }
        ]);

        try {
            const apiKey = 'Bearer sk-proj-u8UfLlCSClGzCIZtCxepT3BlbkFJxQmQDbS9p3RKlhSAb5IB';
            const apiUrl = 'https://api.openai.com/v1/chat/completions';

            // Prepare the messages array for the chat endpoint
            const messages = [
                { role: 'system', content: 'You are a resume creation bot for an app called Achievo. The first thing the user sends you will be data in a JSON format, containing information from their Achievo portfolio. Then, say \"I\'m the Acheivo AI Resume Generator!\", and give them these three options:(1. Auto-Generate from Achievo Porfolio 2. Edit and Create using Achievo Portfolio 3. Create from scratch) If they choose option 1, use the JSON data to create the portfolio. If they choose option 2, ask them what parts of their resume they would like to change. Each time they provide a change, update their portfolio. If they choose option three, replace all the values in the JSON with an empty string, and allow them to add each part of their resume individually. At the end of all of your messages, strictly add three asterisks, a number, and then another three asterisks (ex. \'***0***\' or \'***1***\'). If the user\'s resume isn\'t completed yet, the number should be 0. If it is completed, or the user says they are done, the number should be 1. make a new line, and then strictly add the full JSON object, and nothing more. The asterisk number and the full JSON is crucial to add at the end of ALL of your responses, even after the user says they are done making the resume.' },
                ...data.map(item => ({
                    role: item.type === 'user' ? 'user' : 'assistant',
                    content: item.message
                })),
                { role: 'user', content: message }
            ];

            const response = await axios.post(apiUrl, {
                model: 'gpt-4',
                messages: messages,
                max_tokens: 1024,
                temperature: 0.5,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': apiKey
                }
            });

            const text = response.data.choices[0].message.content.trim();
            setData(prevData => [
                ...prevData,
                { type: 'bot', message: text }
            ]);
            onMessageUpdate('');
            onCanSendUpdate(true);
        } catch (error) {
            console.error("Error sending message:", error);
            alert(`Error: ${error.response ? error.response.data.error.message : error.message}`);
        }
    };

    const retrieveResume = () => {
        if(canRetrieve){

        }
    }

  return (
    <SafeAreaView style={{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.shadow
    }}>
        <Video
        source={require('../constants/videos/copy_16A8AD4E-27DA-402C-BB0B-699EEB2C552A.mov')} // Replace with your video file
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay = {true}
        isLooping = {true}
        style={[styles.video, {
          top: -550,
          left: 0,
          bottom: 0,
          right: 0,
        }]}
        />
        <Video
        source={require('../constants/videos/copy_16A8AD4E-27DA-402C-BB0B-699EEB2C552A.mov')} // Replace with your video file
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay = {true}
        isLooping = {true}
        style={[styles.video, {
          top: 0,
          left: 0,
          bottom: -750,
          right: 0,
          transform: [{rotate: '0deg'}]
        }]}
        />
        
        
        <View
      
      style={{
        alignItems:'center',
        flexDirection: 'column',
        justifyContent:'space-around',
        height: "95%",
        width:'90%',
        borderRadius: 50,
        backgroundColor: COLORS.shadow
      }}>
      <View style={{alignItems: 'flex-start', alignSelf: 'flex-start', width:'100%', marginTop: 10}}>
      <TouchableOpacity style={{ height: 40, backgroundColor: "#060218AA", borderRadius: 10, marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 10}}
            source={require('../constants/images/UIcons/left-arrow-6404.png')}
            tintColor={"white"}
          />
          <Text style={{
            color: COLORS.white,
            marginLeft: 20,
            marginRight: 20,
            fontWeight: 'bold',
            fontSize: 20
          }}>
            Back
          </Text>
          
        </TouchableOpacity>
        
    <Text style={[styles.screenHeader, {marginTop:10, textAlign: 'center', alignSelf: 'center', fontSize: 35}]}>ACHIEVO AI</Text>
    <Text style={[styles.screenHeader, {marginTop:2, textAlign: 'center', alignSelf: 'center', fontSize: 15}]}>Resume Generator</Text>
        
      </View>
        <View style={{
            flex: 8, 
            width: "90%",
            borderRadius: 20,
            borderColor: "#1A094B55",
            borderWidth: 2,
            marginBottom: 20,
            marginTop:20
            }}>
            <WebView source={{ html: displayHTML }}/>

        </View>


        <View style={{
            flex: 8, 
            width: "90%",
            borderRadius: 20,
            backgroundColor: "#1A094B55"

            }}>
        <ScrollView  ref={scrollViewRef} contentContainerStyle={{alignItems:'center', justifyContent:'flex-end'}}>
        {data.map((reply, index) => (
    <View
        style={{
            flexDirection: 'row',
            width: "80%",
            alignItems: reply.type === "bot" ? 'flex-start' : 'flex-end',
            justifyContent: reply.type === "bot" ? 'flex-start' : 'flex-end',
            alignSelf: reply.type === "bot" ? 'flex-start' : 'flex-end',
            marginBottom: 10
        }}
        key={index}
    >
        {reply.type === "bot" && (
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Text
                    style={{
                        color: COLORS.tertiary,
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}
                >
                    Achievo
                </Text>
            </View>
        )}
        <View style={{ alignItems: 'flex-start', flex: 4 }}>
            <Text
                style={{
                    color: reply.type === "bot" ? COLORS.tertLight : COLORS.secoLight,
                    fontSize: 12
                }}
            >
                {reply.type === "bot" ? reply.message.substring(0, reply.message.indexOf('***')) : reply.message}
            </Text>
        </View>
        {reply.type !== "bot" && (
            <View style={{ alignItems: 'center', flex: 1 }}>
                <Text
                    style={{
                        color: COLORS.secondary,
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}
                >
                    You
                </Text>
            </View>
        )}
    </View>
))}
        {(!canSend) && (<Image
            style={{ height:100, aspectRatio: 1, alignSelf:"center", opacity:1, margin: 10}}
            source={require('../constants/images/UIcons/gradient-5812.gif')}
        />)}

        </ScrollView>
        </View>
        
  
        <View style={{justifyContent: "center", width: '100%', marginBottom: 20}}>
        <View style={{marginBottom:15, width: '100%', marginTop:10, flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput
        style={{backgroundColor: COLORS.shadow, borderRadius: 20,paddingHorizontal: 20, height:50, width:"80%",  borderColor: COLORS.secoDark, borderWidth: 2}}
        placeholder="Message the Achievo AI..."
        value={message}
        onChangeText={orgSearch => onMessageUpdate(orgSearch)}
        placeholderTextColor={COLORS.white}
        color={COLORS.white}
        />
        <TouchableOpacity style={{width:50,height:50,backgroundColor:(canSend ? COLORS.secondary : COLORS.lightGray), borderRadius:20, alignItems: 'center', justifyContent: 'center', marginLeft: -50, opacity: (canSend ? 1 : 0.5)}} onPress={sendMessage}>
        <View style={{}}>
            <Ionicons name="send-outline" size={24} color="white" />
        </View>
        </TouchableOpacity>  
        </View>
        <TouchableOpacity style={[styles.sectionShadow, styles.buttonStart, {
          backgroundColor: (canRetrieve ? COLORS.primary : COLORS.lightGray), 
          shadowColor: (canRetrieve ? COLORS.primary : COLORS.lightGray),
          shadowOffset: {
          width: 0,
          height: 0
          },
          shadowRadius: (canRetrieve ? 10 : 0),
          shadowOpacity: 1.0,
          width: '80%',
          height: 50,
          opacity: (canRetrieve ? 1 : 0.8)
          }]} onPress={retrieveResume}>
        <Text style={{fontSize: 15, color: COLORS.white, fontWeight: 'bold'}}>Receive Completed Resume</Text>
        </TouchableOpacity>
        </View>
  
        </View>
    </SafeAreaView>
  )
}

export default AiResumeScreen

