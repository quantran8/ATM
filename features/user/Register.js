import React,{ useState} from 'react'
import { View,StyleSheet,Text,TextInput ,Button,Alert} from 'react-native'
import { userApi } from '../../api/user'
import globalStyle from '../../style'
const Register = ({navigation}) => {
    const [formData,setFormData] = useState({
        email:'',
        password:'',
    }) 
    const handleOnchange = (e,name) => {
       setFormData({
           ...formData,
           [name]:e
       })
    }
    const handleRegister = async () =>{
      if(!formData.email || !formData.password)
        Alert.alert('Note','Please enter email and password');
      else{
         try{
            const res = await userApi.addUser(formData);
            if(res.PRIVATE_TOKEN){
                alert(res.message);
                navigation.navigate("login");
            }else
                alert(res.message);
         }catch(err){
             alert(err.message);
         }
      }
    }
    return (
        <View style={globalStyle.container}>
            <View>
                <Text>Email</Text>
                <TextInput 
                style={globalStyle.input}
                placeholder="Eg: t@gmail.com"
                onChangeText={(e) =>handleOnchange(e,"email")}
                />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput 
                style={globalStyle.input}
                secureTextEntry={true}
                onChangeText={(e) =>handleOnchange(e,"password")}
                />
            </View>
            <View styles={styles.flex}>
                <Button title="Đăng kí" onPress={handleRegister}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    flex:{
       flex:1,
       flexDirection: 'row',

    }
  });
  

export default Register
