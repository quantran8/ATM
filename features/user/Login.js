import React,{ useState} from 'react'
import {
    View,
    TextInput, 
    StyleSheet,
    Button,
    Text,
    Alert
} from 'react-native'
import globalStyle from '../../style/index';
import {userApi} from '../../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import { setCurrentUser } from '../../reducers/userSlice';
import Loading from '../../components/Loading'
const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false)
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
    const handleLogin =  async() =>{
      if(!formData.email || !formData.password)
        Alert.alert('Note','Please enter email and password');
      else{
        setLoading(true)
         try{
            const res = await userApi.getUser(formData);
            if(res.PRIVATE_TOKEN){
               console.log(res.PRIVATE_TOKEN);
               AsyncStorage.setItem("token",res.PRIVATE_TOKEN);
               dispatch(setCurrentUser({
                   user: res.user,
                   PRIVATE_TOKEN:res.PRIVATE_TOKEN
               }));
               navigation.navigate("Home");
            }else
             alert(res.message)
         }catch(err){
            alert(err.message);
         }
         setLoading(false)

      }
    }
   
    return (
        <View style={globalStyle.container}>
            <View>
                <Text>Email</Text>
                <TextInput 
                style={globalStyle.input}
                value={formData.email}
                placeholder="Eg: t@gmail.com"
                onChangeText={(e) =>handleOnchange(e,"email")}
                />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput 
                style={globalStyle.input}
                value={formData.password}
                secureTextEntry={true}
                onChangeText={(e) =>handleOnchange(e,"password")}
                />
            </View>
            <View style={styles.flex}>
                <Button title="Đăng nhập" onPress={handleLogin}/>
                <Button title="Đăng kí" onPress={()=>navigation.navigate("register")}/>
            </View>
            {loading&&<Loading />}
        </View>
    )
}
const styles = StyleSheet.create({
    flex:{
       display:'flex',
       flexDirection: 'row',
       
    }
  });
  

export default Login