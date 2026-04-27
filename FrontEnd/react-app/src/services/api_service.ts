import api from '../components/api';
export const getList=async(page: number | undefined, sortOption: string = "name-asc")=>{
    try {
      const pageParam = page ?? 0;
      const [sortBy, sortDir] = sortOption.split("-");
      const res = await api.get(
        `/products/getList?page=${pageParam}&size=5&sortBy=${sortBy}&sortDir=${sortDir}`
      );
      return res.data;
    } catch (error) {
      console.error("Failed to fetch product list", error);
      return [];
    }
}

