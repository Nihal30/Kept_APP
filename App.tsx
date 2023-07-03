import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Home from './Components/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SideDrawer from './Components/Side-bar/SideDrawer';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
  
      <SideDrawer />
      
   
  );
}

export default App;
