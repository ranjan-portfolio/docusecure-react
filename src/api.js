import axios from "axios";

const api=axios.create({
    baseURL:__API_BASE_URL__,
})

export const setAuthToken=(token)=>{
    console.log("setAuthToken is called");
    if(token){
        api.defaults.headers.common['Authorization']=`Bearer ${token}`;
    }else{
        delete api.defaults.headers.common['Authorization'];
    }
}

export default api;
