import { axiosClient } from ".";

export const userApi = {
    getUser :async(data) => {
       const URL = "/auth/login";
       return axiosClient.post(URL,data);
    },
    addUser :async(data) => {
        const URL = "/auth/register";
        return axiosClient.post(URL,data);
    }
}