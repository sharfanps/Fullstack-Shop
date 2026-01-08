import axios from 'axios';

export interface SignupModel {
  email: string;
  password: string;
}

const API_BASE_URL = "api/auth";

export const registerUser = async (user: SignupModel) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, user);
  return response.data;
};