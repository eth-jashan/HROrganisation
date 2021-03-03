import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigator/Navigator'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, combineReducers} from 'redux'
import ReduxThunk from 'redux-thunk'
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading"


import authReducer from './store/reducer/profile'
import listReducer from './store/reducer/registrationlist'




const fontLoading = () =>{ 
  return Font.loadAsync({

    'black':require('./assets/fonts/AirbnbCereal-Black.ttf'),
    'bold':require('./assets/fonts/AirbnbCereal-Bold.ttf'),
    'book':require('./assets/fonts/AirbnbCereal-Book.ttf'),
    'extraBold':require('./assets/fonts/AirbnbCereal-ExtraBold.ttf'),
    'light':require('./assets/fonts/AirbnbCereal-Light.ttf'),
    'medium':require('./assets/fonts/AirbnbCereal-Medium.ttf'),
    'logo': require('./assets/fonts/Cocon-Regular-Font.otf')
                    
  })}

const reducers=combineReducers({
  auth:authReducer,
  list:listReducer
})

const store=createStore(reducers,applyMiddleware(ReduxThunk))

export default function App() {
  const[fontLoad, setFontLoad] = useState(false)

  if(!fontLoad)
      {
        return <AppLoading
        startAsync ={fontLoading}
        onFinish = {() => setFontLoad(true)}
        onError = {(test)=> console.log(test) }
        /> 
      }
  return (
    <Provider store={store} >
      <Navigator/>
    </Provider>
  );
}


