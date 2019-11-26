import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import Fgp from './Fgp'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Fgp,navigationOptions: {
  header:null}},
});

const stackPage4 = createStackNavigator({
  Page4Screen:{screen:Page4,navigationOptions: {
  header:null}},
});

const stackPage5 = createStackNavigator({
  Page5Screen:{screen:Page5,navigationOptions: {
  header:null}},
});

const stackPage6 = createStackNavigator({
  Page6Screen:{screen:Page6,navigationOptions: {
  header:null}},
});




const navigator = createDrawerNavigator({
    Login:{screen:stackPage4,navigationOptions: {
    header:null}},
    Register:{screen:stackPage5,navigationOptions: {
    header:null}},
    Home:{screen:stackPage6,navigationOptions: {
    header:null}},
    Fgp:{screen:stackPage1,navigationOptions: {
    header:null}},
  })


export default createAppContainer(navigator);
