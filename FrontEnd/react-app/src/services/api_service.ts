import api from '../components/api';
export const getList=async(page: number | undefined)=>{
    try {
  const res=await api.get(`/products/getList?page=${page}&size=5`);
  return res.data;
    }catch (error) {
    console.error("Failed to fetch product list", error);
    return []; 
  }
}

