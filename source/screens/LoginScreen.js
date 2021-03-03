import React,{useState,useEffect, useCallback} from 'react'
import {View,Text,StyleSheet, Button, Dimensions,Alert} from 'react-native'
import {login} from '../../store/action/auth'
import { TextInput } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as listAction from '../../store/action/registrationlist'

const LoginScreen= props =>{

    const[email,setemail]=useState('')
    const[error,seterror]=useState()
    const[password,setpassword]=useState('')
    const dispatch=useDispatch()

    const fetchOperation = useCallback( async() => {

        await dispatch(listAction.fetchdetails())
        // await dispatch(listAction.fetchDepartment())
    
    },[dispatch])
    
    useEffect(()=>{
    
        const willFocusListener = props.navigation.addListener('didFocus',fetchOperation)
        return()=>{
            willFocusListener.remove();
        };
    
      },[fetchOperation]);
    
    
      useEffect(()=>{
    
        fetchOperation()
        
      },[fetchOperation, dispatch])

    console.log("List :", useSelector(x=>x.list.companylist))
     
    
    useEffect(()=>{
        if(error){
            Alert.alert('ERROR 404',error,[{text:'Okay'}]);
        }
    },[error])

    const authHandler=async()=>{
        seterror(null)
        try{
            //await dispatch(login(email,password))
            props.navigation.navigate('Home')
        }
        catch(err){
            seterror(err.message)
        }
    }
    
    return(
        <SafeAreaView>
        <View style={styles.maincontainer}>
            
            <View style={{width:Dimensions.get('window').width, alignSelf:'center'}}>
            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>
               
               <TextInput 
                style={styles.input} 
                placeholder="Email" 
                value={email} 
                onChangeText={text=>setemail(text)}
                mode = 'outlined'
                label = 'Email'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                />

            </View>

            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>    
               
               <TextInput 
                style={styles.input} 
                placeholder='Password' 
                value={password} 
                onChangeText={text=>setpassword(text)}
                mode = 'outlined'
                label = 'Password'
                theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                />

            </View>
            <View style={{width:Dimensions.get('window').width, alignItems:'center'}}>
                
                <TouchableOpacity style={{width:Dimensions.get('window').width*0.8, borderRadius:8,margin:10}} onPress={fetchOperation}>
                <View style={{backgroundColor:'#ea80fc', width:'100%', padding:10,  borderRadius:8}}>
                    <Text style={{fontFamily:'book', fontSize:20, color:'white', alignSelf:'center'}}>Login</Text>
                </View>
                </TouchableOpacity>

            </View>
            </View>
        
        
        </View>  
        </SafeAreaView>
    )
}

LoginScreen.navigationOptions=(navData)=>{
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
        justifyContent:'center',      
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
    },
    button:{
        width:'50%',
        alignSelf:'center',
        margin:10,
        padding:10,
    },
    link:{
        fontFamily:'black',
        color:'#ffffff',
        textAlign:'center',
        fontSize:15
    }

})

export default LoginScreen;

