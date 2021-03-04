import React ,{useEffect,useCallback}from 'react'
import {View,Text} from 'react-native'
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import * as messageActions from '../../store/action/message';

const HomeScreen=props=>{
    const dispatch=useDispatch()

    const profile = useSelector(state=>state.profile.detailList);

    const companyid = profile.compid;
    const DepId = profile.depid;

    dispatch(messageActions.fetchMessage(companyid,DepId))
    const logging=useCallback(async()=>{
       
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
       
       
    }
}

export default HomeScreen;