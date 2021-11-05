import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


/*** Import des pages ***/
import Login from './views/Login';
import Carte from './views/Carte';
import TabNavigation from './components/tabNavigation';
import Article from './components/article';
import ArticleDetails from './components/articleDetails';
import Inscription from './components/inscription';
/***************/

const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" >
        <Stack.Screen name="login" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Inscription" component={Inscription} options={{
          headerShown: true
        }} />
        <Stack.Screen name="carte" component={Carte} options={{
          headerShown: false
        }} />
        <Stack.Screen name="tab" component={TabNavigation} options={{
          headerShown: false
        }} />
        <Stack.Screen name="article" component={Article} options={{
          headerShown: false
        }} />
        <Stack.Screen name="articleDetails" component={ArticleDetails}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
