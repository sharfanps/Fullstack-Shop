import axios from 'axios';
//const api=axios.create({baseURL:"http://localhost:8080/api/"});
const api=axios.create({baseURL:"https://ecommerce-react-springboot-production.up.railway.app/api"});
api.interceptors.request.use((config)=>{
const token =localStorage.getItem("token");
if(token)

    {
        console.log("token :",token);
        config.headers.Authorization= `Bearer ${token}`;
    }
    return config;

});
 export default api;
