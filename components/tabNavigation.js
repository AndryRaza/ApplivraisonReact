import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Carte from '../views/Carte';
import Panier from '../views/Panier';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'carte':
      iconName = 'appstore1';
      color = 'red';
      break;
    case 'panier':
      iconName = 'shoppingcart';
      color = 'red';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

const TabNavigation = (props) => {
  return (
    <Tab.Navigator initialRouteName="panier" screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => screenOptions(route, color),
    })} barStyle={{backgroundColor : 'white'}}>
      <Tab.Screen name="carte" component={Carte}/>
      <Tab.Screen name="panier" component={Panier} />
    </Tab.Navigator>
  )
}

export default TabNavigation;