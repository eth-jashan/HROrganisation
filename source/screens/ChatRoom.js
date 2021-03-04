import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Dimensions,View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import * as messageActions from '../../store/action/message';
import Chat from '../components/Chat';
import { TextInput} from 'react-native-paper'
import { Button } from 'react-native'

const ChatRoom=props=>{
    const dispatch = useDispatch();

    const message = useSelector(state=>state.message.message);
    const profile = useSelector(state=>state.profile.detailList);
    const departmentId = useSelector(x=>x.profile.depId)
    const companyId = useSelector(x=>x.profile.compId)
    const userId = useSelector(x=>x.profile.userid)

    const CreateMsg = async() => {
        // let date = new Date()
        await dispatch(messageActions.createMessage(companyId,departmentId,profile[0].name,message1,userId))
        await dispatch(messageActions.fetchMessage(companyId,departmentId))
    }

    const [message1,setMessage1] = useState('');

    return(
        
        <View style={{backgroundColor:'#121212',height:Dimensions.get('window').height,}} >
        <Button
            title='Open'
            onPress={CreateMsg}
        />
        <FlatList
            data={message}
            keyExtractor={x=>x.id}
            renderItem={({item,index})=>{
                return<Chat
                    item = {item}
                />
            }}
        />

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