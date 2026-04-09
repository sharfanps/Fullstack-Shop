import { useEffect, useState } from "react";
import "./product.css";
import { getList } from "../services/api_service";
import { useNavigate } from "react-router-dom";

export default function productList(){
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const navigate=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem("token");
        if(!token)
        {
            navigate("/");
            return;
        }
        fetchList(page);

    },[]);

type product={
    id:number;
    name:string;
    price:string;
}
type PageModel<T> = {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
};
const [products,setProducts]=useState<product[]>([]);

 const fetchList=async (page: number | undefined)=> {
    try{
    const res=await getList(page);
   console.log("res.. "+JSON.stringify(res));
    if(!res.error){
        setProducts(res.content);
        setPage(res.number);
        setTotalPages(res.totalPages);
        console.log("List :",res);
    }
     }catch(Error){
        console.error("List Error");
    };
}
  useEffect(() => {
    fetchList(page);
  }, [page]);

const handleNext = () => {
    if (page < totalPages - 1) fetchList(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) fetchList(page - 1);
  };

    return(
    <div className="product-page">
    <h2>Product List</h2>

     <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {/* <img src={product.image} alt={product.name} /> */}
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} disabled={page === 0}>
          Prev
        </button>
       <span> Page {page + 1} of {totalPages} </span>
       <button onClick={handleNext} disabled={page === totalPages - 1}>
          Next
        </button>
      </div>
    );
    
}

