import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer} from "react-navigation/native";
import{createStackNavigator } from "react-navigation/stack"
import Home from './src/components/Home'

  
export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" Component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
};
