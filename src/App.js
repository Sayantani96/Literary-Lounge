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
import { AuthContextProvider } from "./Frontend/utilities/AuthContext";
import ProtectedRoute from "./Frontend/utilities/HOC/ProtectedRoute";
import Header from "./Frontend/Components/Header/Header";
import { AddressContextProvider } from "./Frontend/utilities/AddressContext";
import Checkout from "./Frontend/Pages/Checkout";


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
      <Router>
      <ProductContextProvider>
      <AuthContextProvider>
      <CartContextProvider>
      <WishlistContextProvider>
      <FilterContextProvider>
      <CategoryContextProvider>
      <AddressContextProvider>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductListing/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products/:id" element={<AbouProduct/>}/>
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart/>
        </ProtectedRoute>
      }
        />
        <Route path="/wishlist" element={
      <ProtectedRoute>
        <Wishlist/>
        </ProtectedRoute>
        }/>
        <Route path="/categories/:id" element={<FeaturedCategory/>}/>
        {/* <Route path="/*" element={<ErrorPage/>}/> */}
        <Route path="/checkout" element={<Checkout/>}/>
        
      </Routes>
      </AddressContextProvider>
    </CategoryContextProvider>
    </FilterContextProvider>
    </WishlistContextProvider>
    </CartContextProvider>
    </AuthContextProvider>
    </ProductContextProvider>
    </Router>
    </div>
  );
}

export default App;
