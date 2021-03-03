import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import LoginScreen from '../source/screens/LoginScreen';
import HomeScreen from '../source/screens/HomeScreen';
import ProfileScreen from '../source/screens/ProfileScreen';
import ChatRoom from '../source/screens/ChatRoom';
import { Ionicons } from '@expo/vector-icons';
const defaultNavOptions = {
    headerStyle:{
        backgroundColor:'#121212'
    },
    headerTintColor:'#ea80fc'
}

const LoginNavigator=createStackNavigator({
    Login:LoginScreen
},{ defaultNavigationOptions: defaultNavOptions})
const HomeNavigator=createStackNavigator({
    Home:HomeScreen
},{ defaultNavigationOptions: defaultNavOptions})
const ProfileNavigator=createStackNavigator({
    Profile:ProfileScreen
},{ defaultNavigationOptions: defaultNavOptions})
const ChatNavigator=createStackNavigator({
    Chat:ChatRoom
},{ defaultNavigationOptions: defaultNavOptions})

const tabScreenConfig = {
    Home:{
        screen:HomeNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return(
                <Ionicons name="md-home" size={24} color={tabInfo.tintColor} />
                    
                );
            }
        }
    },
    Profile:{
        screen:ProfileNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return(<Ionicons name="ios-person" size={24} color={tabInfo.tintColor} />
                );
            }
        }
    },
    ChatRoom:{
        screen:ChatNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo) => {
                return(<Ionicons name="ios-chatbox" size={24} color={tabInfo.tintColor} />
                );
            }
        }
    },

};
const BottomTabNav = createMaterialBottomTabNavigator(tabScreenConfig,{
    activeColor:'#ea80fc',
    shifting:true,
    barStyle:{backgroundColor:'#121212'}
});

const Appswitch=createSwitchNavigator({
    Login:LoginNavigator,
    Home:BottomTabNav
})

export default createAppContainer(Appswitch)