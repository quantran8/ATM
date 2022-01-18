import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getToken = async () => {
  return AsyncStorage.getItem("token");
}
export const axiosClient = axios.create({
    baseURL:"http://192.168.15.102:5000/api/v1",
    timeout:5000
 
})

axiosClient.interceptors.request.use(async function (config) {
    config.headers={
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await getToken()}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
axiosClient.interceptors.response.use((res) => {
    return res.data;
  },(error) => {
      return Promise.reject(error);
  })
 
