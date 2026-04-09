import axios from 'axios';
import type loginResponse from '../assets/interfaces/loginResponse';


export interface SignupModel {
  email: string;
  password: string;
}


const API_BASE_URL = "api/auth";

export const registerUser = async (user: SignupModel) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, user);
  return response.data;
};

export const loginUser=async(user: SignupModel):Promise<loginResponse>=>{
  
  const response=await axios.post(`${API_BASE_URL}/login`,user);
  console.log("resp : "+JSON.stringify(response.data));
  return response.data;
}

  export const logout=async()=>{

    try{
      const res=await axios.post(`${API_BASE_URL}/logout`);
      return res.data;
    }catch(error){

    }
  }
  
