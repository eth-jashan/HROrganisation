import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { Button } from 'react-native'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import * as messageActions from '../../store/action/message';
import Chat from '../components/Chat';


const ChatRoom=props=>{
    const dispatch = useDispatch();

    const message = useSelector(state=>state.message.message);
    const profile = useSelector(state=>state.profile.detailList);

    const companyid = profile.compid;
    const DepId = profile.depid;
    const senderId = profile.id;
    const senderName = profile.Name;

    useEffect(()=>{
        fetchOperation();
    },[dispatch])

    const fetchOperation = async(companyid,DepId) => {
        await dispatch(messageActions.fetchMessage(companyid,DepId))
    }

    const CreateMsg = async(senderName,message) => {
        let date = new Date();
        await dispatch(messageActions.createMessage(comapanyid,DepId,senderName,message,date,senderId))
    }
    const [message1,setMessage1] = useState('');

    return(
        <View style={{backgroundColor:'#121212',flex:1}} >
            <View>
                <View style={{flex:1}}>
                   <FlatList data={message} keyExtractor={item=>item.id} renderItem={itemData =>
                   <Chat name={itemData.item.name} message={itemData.item.message}/>}/>
                </View>
                <View style={styles.TextingContainer}>
                    <View>
                        <TextInput style={styles.input} 
                        placeholder="Message" mode="flat" onChangeText={text => setMessage1(text)}/>
                    </View>
                    <View>
                    <TouchableOpacity onPress={CreateMsg.bind(senderName,message1)} >
                      <View style={{backgroundColor:'#ea80fc', width:'100%', padding:9.5,  borderRadius:8}}>
                        <Text style={{fontFamily:'book', fontSize:20, color:'white', alignSelf:'center'}}>Send</Text>
                      </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    TextingContainer:{
        justifyContent:'space-between',
        width:Dimensions.get('window').width,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        fontFamily: 'light', 
        color: 'white',
        height: Dimensions.get('screen').height*0.07,
        width: Dimensions.get('screen').width*0.85, 
        backgroundColor:'#606368',
        borderRadius:10
    }
});

export default ChatRoom;