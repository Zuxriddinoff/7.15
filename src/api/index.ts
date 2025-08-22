import axios from "axios";

export const api = axios.create({
    baseURL: "https://shoping-469710.el.r.appspot.com/"
})


api.interceptors.request.use((config) =>{
    const token = localStorage.getItem("x-auth-access_token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})