import React from 'react'
import {Button,View,Text,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Style from '../../style';

const User = ({navigation}) => {
  
    const handlePress = () => {
        AsyncStorage.removeItem("token");
        navigation.navigate("login");
    }
 
    return (
      <View style={Style.container}>
        <Text>Welcome </Text>
        <Button title="Đăng xuất" onPress={handlePress} />
      </View>
    )
}
export default User
