import { axiosClient } from "./";
export const atmApi = {
    getAtm : async () => {
        const URL = "/atms";
        return axiosClient.get(URL)
    },
    remove : async (id) => {
        const URL = `/atms/${id}`;
        return axiosClient.delete(URL);
    },
    addAtm : async (name) => {
        const URL ='/atms';
        return axiosClient.post(URL, {name});

    }
};