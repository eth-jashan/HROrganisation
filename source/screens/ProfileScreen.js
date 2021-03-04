import React, { useState } from 'react'
import { View,Text,Dimensions,StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {updateProfile} from '../../store/action/profile'

const ProfileScreen=props=>{
    const hrdetails=useSelector(state=>state.profile.detailList)
    const [name,setname]=useState(hrdetails.name)
    const [number,setnumber]=useState(hrdetails.number)
    const [age,setage]=useState(hrdetails.age)
    const [role,setrole]=useState(hrdetails.role)
    const [joindate,setjoindate]=useState(hrdetails.joineddate)
    const dispatch=useDispatch()
    const updateHandler=async()=>{
        await dispatch(updateProfile(hrdetails.id,hrdetails.DepId,hrdetails.compId,
            name,number,hrdetails.email,age,role,hrdetails.role,joindate))
    }
    return(
        <SafeAreaView style={styles.maincontainer} >
           <View style={{width:Dimensions.get('window').width, alignSelf:'center'}} >
           <View style={{justifyContent:'center',alignItems:'center',margin:10}} >
           <Text style={{margin:25,color:'#ffffff',fontSize:25,fontFamily:'medium'}} >Employee's Details</Text>
               <Ionicons
               title='Profile'
                   name='ios-person'
                   size={80}
                   color='#ea80fc'
               />
           </View>
           <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>
               
               <TextInput 
                style={styles.input} 
                placeholder="Name" 
                value={name} 
                onChangeText={text=>setname(text)}
                mode = 'flat'
                label = 'Name'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                />

            </View>
            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>
               
               <TextInput 
                style={styles.input} 
                placeholder="Number" 
                value={number} 
                onChangeText={text=>setnumber(text)}
                mode = 'flat'
                label = 'Number'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                />

            </View>
            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>
               
               <TextInput 
                style={styles.input} 
                placeholder="Age" 
                value={age} 
                onChangeText={text=>setage(text)}
                mode = 'flat'
                label = 'Age'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                />

            </View>
            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>
               
               <TextInput 
                style={styles.input} 
                placeholder="Role" 
                value={role} 
                onChangeText={text=>setrole(text)}
                mode = 'flat'
                label = 'Role'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                />

            </View>
            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}} >
            <TextInput
                    value = {hrdetails.email}
                    disabled
                    mode = 'flat'
                    label = 'Email'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={styles.input}
                />
            </View>
            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>
               
               <TextInput 
                style={styles.input} 
                placeholder="Joined Date" 
                value={joindate} 
                onChangeText={text=>setjoindate(text)}
                mode = 'flat'
                label = 'Joined Date'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                />

            </View>
            <View style={{justifyContent:'center',alignItems:'center'}} >
            <TouchableOpacity style={{width:Dimensions.get('window').width*0.8, borderRadius:8,margin:10}} onPress={updateHandler} >
                <View style={{backgroundColor:'#ea80fc', width:'100%', padding:10,  borderRadius:8}}>
                    <Text style={{fontFamily:'book', fontSize:20, color:'white', alignSelf:'center'}}>Update</Text>
                </View>
                </TouchableOpacity>
            </View>
           </View>
        </SafeAreaView>
    )
}
ProfileScreen.navigationOptions=navData=>{
    return{
        header:()=>{
            return false
        }
    }
}
const styles=StyleSheet.create({
    maincontainer:{
        height:Dimensions.get('window').height, 
        width:Dimensions.get('window').width,
        backgroundColor:'#121212',  
             
    },
    logo:{
        fontFamily:'logo',
        fontSize:35,
        textAlign:'center',
        color:'#ffffff',
        margin:10
    },
    input:{
        fontFamily: 'medium', 
        color: 'white',
        height: 60,
        width: Dimensions.get('screen').width*0.95, 
        backgroundColor:'#606368',
        margin:5,
        color:'#ffffff'
    },
})
export default ProfileScreen;
