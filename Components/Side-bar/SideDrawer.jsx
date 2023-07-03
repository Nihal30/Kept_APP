import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Home/Home';
import NewNote from '../New-note/NewNote';
import Labels from '../Labels/Labels';
import Archive from '../Archive/Archive';
import HelpFeed from '../Help & feedback/HelpFeed';
import Theam from '../Theam/Theam';

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Notes" component={Home} />
        <Drawer.Screen name="ADD Note" component={NewNote} />
        <Drawer.Screen name="Labels" component={Labels} />
        <Drawer.Screen name="Archive" component={Archive} />
        <Drawer.Screen name="Help & FeedBack" component={HelpFeed} />
        <Drawer.Screen name="Theam" component={Theam} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default SideDrawer;
