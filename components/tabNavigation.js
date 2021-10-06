import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Carte from '../views/Carte';
import Panier from '../views/Panier';

const Tab = createMaterialBottomTabNavigator();


const TabNavigation = (props) => {
    return (
        <Tab.Navigator initialRouteName="carte">
            <Tab.Screen name="carte" component={Carte} />
            <Tab.Screen name="panier" component={Panier} />
        </Tab.Navigator>
    )
}

export default TabNavigation;