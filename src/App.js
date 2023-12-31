import{Routes,Route} from 'react-router-dom'
import ProductListing from "./Frontend/Pages/Products";
import Cart from '../src/Frontend/Pages/Cart'
import Home from '../src/Frontend/Pages/Home'
import Wishlist from '../src/Frontend/Pages/Wishlist'
import Auth from "./Frontend/Pages/Auth";
import Login from "./Frontend/Pages/Login";
import AbouProduct from "./Frontend/Pages/AbouProduct";
import FeaturedCategory from "./Frontend/Pages/FeaturedCategory";
import ProtectedRoute from "./Frontend/utilities/HOC/ProtectedRoute";
import Header from "./Frontend/Components/Header/Header";
import Checkout from "./Frontend/Pages/Checkout";


function App() {
  
  return (
    <>
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
        <Route path="/*" element={<Home/>}/>
        <Route path="/checkout" element={
      <ProtectedRoute>
        <Checkout/>
        </ProtectedRoute>
        }/>
        
      </Routes>
    </>
  );
}

export default App;
