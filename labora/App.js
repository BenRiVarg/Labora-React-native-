import * as React from 'react';
import {StyleSheet, ScrollView, View, Button, LogoTitle, Text, Image} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/Home';
import TrabajosScreen from './components/Trabajo';
import ExtraScreen from './components/About';
import DetalleTrabajo from './components/Details';
import MasScreen from './components/Mas';
import Registro from './components/registro';


const HomeTab = createBottomTabNavigator();
function HomeTabs({navigation, route}) {
  return (
    <HomeTab.Navigator initiaRouteNavigatio={'Home'} >
      <HomeTab.Screen name='Más' component={HomeScreen} />
      <HomeTab.Screen name="About" component={ExtraScreen} />
    </HomeTab.Navigator>
  );
}
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Trabajo" component={TrabajosScreen} />
        <Stack.Screen name='Details' component={DetalleTrabajo}/>
        <Stack.Screen name='About' component={ExtraScreen}/>
        <Stack.Screen name='Registro' component={Registro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;