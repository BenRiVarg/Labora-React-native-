import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import { NavigationContainer,  getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/homescreen';
import TrabajosScreen from './components/trabajosscreen';
import ExtraScreen from './components/extra';
import DetalleTraqbajo from './components/detalleTrabajo';

import p1 from  './components/pruebaHome';
import p2 from  './components/prueba';

const Tab = createBottomTabNavigator();

function Tabs({navigation, route}){
  return(
      
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={HomeScreen}/>
        <Tabs.Screen name='Trabajos' component={TrabajosScreen}/>
        <Tabs.Screen name='Nosotros' component={ExtraScreen}/>
    </Tabs.Navigator>
    
    );
}

const RootStack = createStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={p1}
          options={({route}) => ({
            
          })}
        />
        <RootStack.Screen
          name="Profile"
          component={DetalleTraqbajo}
          options={() => ({headerTitle: 'Trabajos'})}
        />
        <RootStack.Screen
          name="pruebaDatos"
          component={p2}
          options={() => ({headerTitle: 'Desplegado de Información'})}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}



