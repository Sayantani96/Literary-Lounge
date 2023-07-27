import { useEffect } from "react";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./App.css";
import { ProductContextProvider } from "./Frontend/utilities/ProductContext";
import { CartContextProvider } from './Frontend/utilities/CartContext'
import { WishlistContextProvider } from './Frontend/utilities/WishListContext'
import ProductListing from "./Frontend/Pages/Products";
import Cart from '../src/Frontend/Pages/Cart'
import Home from '../src/Frontend/Pages/Home'
import Wishlist from '../src/Frontend/Pages/Wishlist'
import Auth from "./Frontend/Pages/Auth";
import Login from "./Frontend/Pages/Login";
import AbouProduct from "./Frontend/Pages/AbouProduct";
import FeaturedCategory from "./Frontend/Pages/FeaturedCategory";
import { CategoryContextProvider } from "./Frontend/utilities/CategoryContext";
import { FilterContextProvider } from "./Frontend/utilities/FilterContext";


function App() {
  // useEffect(()=>{
  //   const apiRes=async()=>{
  //     const response=await fetch("/api/products")
  //                           .then(res=>res.json());
  //     console.log(response);
  //   }
  //   apiRes();
    
  // },[])
  return (
    <div className="App">
      <ProductContextProvider>
      <CartContextProvider>
      <WishlistContextProvider>
      <FilterContextProvider>
      <CategoryContextProvider>
      <Router>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductListing/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products/:id" element={<AbouProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/categories/:id" element={<FeaturedCategory/>}/>
        {/* <Route path="/*" element={<ErrorPage/>}/> */}
        
      </Routes>
    </Router>
    </CategoryContextProvider>
    </FilterContextProvider>
    </WishlistContextProvider>
    </CartContextProvider>
    </ProductContextProvider>
    </div>
  );
}

export default App;
