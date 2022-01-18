import React,{useEffect} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../features/user/User';
import ATMScreen from '../features/atm/ATMScreen';
import { useDispatch, useSelector } from 'react-redux';
import { atmApi } from '../api/atm';
import { setAtm } from '../reducers/atmSlice';
const Tab = createBottomTabNavigator();
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      const getATM = async() => {
          const res = await atmApi.getAtm();
          dispatch(setAtm(res));
      }
      const interval= setInterval(() => {
        try{
          getATM();
        }catch(err){
          console.error(err.message);
          clearInterval(interval);
        }
      },1000)
      
      return ()=>{
        clearInterval(interval);
        console.log("unmout")
      }
      
  },[])
    return (
         <Tab.Navigator >
            <Tab.Screen 
            name="ATM" 
            component={ATMScreen} 
            options={{
              tabBarLabel:"ATM",
              tabBarIcon: () => <MaterialIcons name="local-atm" size={24} color="black" />
            }}
            />
            <Tab.Screen 
            name="User" 
            component={User} 
            options={{
              tabBarLabel:"Account",
              tabBarIcon:()=> <FontAwesome name="user-circle" size={24} color="black" />,
              headerShown: true 
            }}
            />
       </Tab.Navigator>
    )
}

export default Home
