import React from 'react'
import {View,Text} from 'react-native'

const HomeScreen=props=>{
    return(
    <View style={{backgroundColor:'#121212',flex:1}} >
    <Text style={{color:'#ffffff'}} >Home</Text>
    </View>
    );
}

HomeScreen.navigatonOptions=navData=>{
    return{
       
    }
}

export default HomeScreen;