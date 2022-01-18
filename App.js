import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {store} from './app/index';
import {Provider} from 'react-redux';
import Login from './features/user/Login';
import {getToken} from './api/index';
import Home from './components/Home';
import Register from './features/user/Register';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <Provider store={store}>
    <NavigationContainer>
       <Stack.Navigator>
          
           
           <Stack.Screen name="login" component={Login} />
           <Stack.Screen name="register" component={Register} />
           <Stack.Screen 
           name="Home" 
           component={Home} 
           options={{
             headerShown:false
           }}
           />
           
       </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
