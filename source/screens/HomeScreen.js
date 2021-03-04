import React ,{useEffect,useCallback}from 'react'
import {View,Text} from 'react-native'
import { useDispatch , useSelector} from 'react-redux'
import * as profileAction from '../../store/action/profile'
import * as messageActions from '../../store/action/message';

const HomeScreen=props=>{
    const dispatch=useDispatch()
    const profile = useSelector(state=>state.profile.detailList);
    
    
    const fetchOperation = useCallback( async() => {

        await dispatch(profileAction.fetchProfile())   
        // console.log('ProfileIDs', profile[0].DepId, profile[0].compId)
        // await dispatch(messageActions.fetchMessage(companyid,DepId))
    },[])


    
    

    
    
    
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