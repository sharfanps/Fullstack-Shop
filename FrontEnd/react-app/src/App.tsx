
import './App.css';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './components/Signup'
import ProductList from './components/productList';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

     <Routes>
      <Route path="/Signup" element={<Signup/>}/> 
      <Route path="/" element={<Login/>}/> 
      <Route path="/productList" element={<ProductList/>}/>
     </Routes>
    </>
  )
}

export default App
