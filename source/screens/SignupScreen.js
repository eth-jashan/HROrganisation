import React, { useState } from 'react';
import { TextInput} from 'react-native-paper'
import {View,Text,StyleSheet, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



const SignupScreen = props => {

    const [name, setName] = useState('')
    const [locality, setLocality] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [reEnterPassword, setPassword2] = useState('')
    const [url, setUrl] = useState('')

    const dispatch = useDispatch()

    const signUpHandler = async() => {

        if(reEnterPassword === password){
            
            await dispatch(signupAction.signup(mail, password, locality, state, city,name,url))
            await dispatch(profileAction.addAccount(name, locality, state, city, url, mail))
            props.navigation.navigate('Login')
        }else{
            alert("Password Don't Match !")
        }

    }
    

    return(
        <SafeAreaView>
        <ScrollView>
        <View style={{height:Dimensions.get('window').height, width:Dimensions.get('window').width, backgroundColor:'#121212',justifyContent:'center'}}>
        <Text style={{fontSize:35, fontFamily:'medium', color:'white', alignSelf:'center', margin:10}}>Register Your Company</Text>
        <View style={{alignSelf:'center'}}>    
            
            <View style={{width:Dimensions.get('window').width, paddingHorizontal:5}}>
                <TextInput
                    value = {name}
                    onChangeText = {(text)=>setName(text)}
                    mode = 'outlined'
                    label = 'Name of Organisation'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.97, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>
        
            <View style={{width:Dimensions.get('window').width, flexDirection:'row', justifyContent:'space-between',paddingHorizontal:5}}>
                <TextInput
                    value = {locality}
                    onChangeText = {(text)=>setLocality(text)}
                    mode = 'outlined'
                    label = 'Locality'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.475, backgroundColor:'#606368', alignSelf:'center' }}
                />
                <TextInput
                    value = {city}
                    onChangeText = {(text)=>setCity(text)}
                    mode = 'outlined'
                    label = 'City'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.475, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>

            <View style={{width:Dimensions.get('window').width}}>
                <TextInput
                    value = {state}
                    onChangeText = {(text)=>setState(text)}
                    mode = 'outlined'
                    label = 'State'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.97, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>

            <View style={{width:Dimensions.get('window').width}}>
                <TextInput
                    value = {mail}
                    onChangeText = {(text)=>setMail(text)}
                    mode = 'outlined'
                    label = 'Company Mail'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.97, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>

            <View style={{width:Dimensions.get('window').width, flexDirection:'row', justifyContent:'space-between',paddingHorizontal:5}}>
                <TextInput
                    value = {password}
                    onChangeText = {(text)=>setPassword(text)}
                    mode = 'outlined'
                    label = 'Password'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.475, backgroundColor:'#606368', alignSelf:'center' }}
                />
                <TextInput
                    value = {reEnterPassword}
                    onChangeText = {(text)=>setPassword2(text)}
                    mode = 'outlined'
                    label = 'Re-enter Password'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.475, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>

            <View style={{width:Dimensions.get('window').width}}>
                <TextInput
                    value = {url}
                    onChangeText = {(text)=>setUrl(text)}
                    mode = 'outlined'
                    label = 'Website URL'
                    theme ={{colors:{primary:'#ea80fc',underlineColor:'transparent'}}}
                    style={{ fontFamily: 'medium', fontColor: 'white', height: 60, width: Dimensions.get('screen').width*0.97, backgroundColor:'#606368', alignSelf:'center' }}
                />
            </View>

            <View style={{width:Dimensions.get('window').width, alignItems:'center'}}>
                
                <TouchableOpacity style={{width:Dimensions.get('window').width*0.8, margin:10, borderRadius:8}} onPress={signUpHandler}>
                <View style={{backgroundColor:'#ea80fc', width:'100%', padding:10, borderRadius:8}}>
                    <Text style={{fontFamily:'book', fontSize:20, color:'white', alignSelf:'center'}}>Register</Text>
                </View>
                </TouchableOpacity>

            </View>


        </View>               
        </View>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});


SignupScreen.navigationOptions=(navData)=>{
    return{
        header:()=>{
            return false
        }
    }
}

export default SignupScreen;