import api from '../components/api';
export const getList=async()=>{
    try {
  const res=await api.get(`/products/getList`);
  return res.data;
    }catch (error) {
    console.error("Failed to fetch product list", error);
    return []; 
  }
}