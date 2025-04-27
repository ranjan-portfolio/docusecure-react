import axios from "axios";

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

console.log("API_BASE_URL ", API_BASE_URL);

const api=axios.create({
    baseURL:API_BASE_URL,
})

export const setAuthToken=(token)=>{
    console.log("setAuthToken is called");
    if(token){
       // console.log("token is ",token);
        //console.log("API_BASE_URL ", API_BASE_URL);
        api.defaults.headers.common['Authorization']=`Bearer ${token}`;
    }else{
        delete api.defaults.headers.common['Authorization'];
    }
}

export default api;
