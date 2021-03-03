import React ,{useEffect,useCallback}from 'react'
import {View,Text} from 'react-native'
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import {logout} from '../../store/action/auth'
const HomeScreen=props=>{
    const dispatch=useDispatch()
    const logging=useCallback(async()=>{
        await dispatch(logout());
        props.navigation.navigate('Login')
    },[dispatch])
    useEffect(()=>{
        props.navigation.setParams({action:logging})
    },[logging])
    return(
    <View style={{backgroundColor:'#121212',flex:1}} >
    <Text style={{color:'#ffffff'}} >Home</Text>
    </View>
    );
}

HomeScreen.navigatonOptions=navData=>{
    const action=navData.navigation.getParam('action')
    return{
        headerTitle:'Home',
        headerRight:()=><HeaderButtons HeaderButtonComponent={Header} >
        <Item title='lout'
            iconName='log-out'
            onPress={action}
            />
        </HeaderButtons>
       
    }
}

export default HomeScreen;