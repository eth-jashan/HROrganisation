import React ,{useEffect,useCallback}from 'react'
import {View,Text} from 'react-native'
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import * as profileAction from '../../store/action/profile'

const HomeScreen=props=>{
    const dispatch=useDispatch()
    
    const fetchOperation = useCallback( async() => {

        await dispatch(profileAction.fetchProfile())
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

    return(
    <View style={{backgroundColor:'#121212',flex:1}} >
    <Text style={{color:'#ffffff'}}>Home</Text>
    </View>
    );
}

HomeScreen.navigationOptions=(navData)=>{
    return{
        header:()=>{
            return false
        }
    }
}

export default HomeScreen;