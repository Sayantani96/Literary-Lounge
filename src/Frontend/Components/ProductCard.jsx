import React, {useState,useContext} from 'react'
import Button from '../Components/Button';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../utilities/CartContext';
import { WishlistContext } from '../utilities/WishListContext';
import AlertBox from '../Components/AlertBox/AlertBox'
import { AuthContext } from '../utilities/AuthContext';

const ProductCard = ({title,author,category,price,prod,id}) => {

    const {addToCart,fetchData,isPresentInCart,increment,showAlertForCart,dispatch}=useContext(CartContext);
    const {addToWishlist,fetchWishlistData,showAlertForWishlist}=useContext(WishlistContext);
    const {isLoggedIn}=useContext(AuthContext);
    const [addToCartClicked, setAddToCartClicked] = useState(false);
    const [addToWishlistClicked, setAddToWishlistClicked] = useState(false);
    const navigate=useNavigate();
    const goToCart=()=>{
        navigate('/cart');
    }
    const addProductToCart=async (value)=>{
    if(isLoggedIn){
        await fetchData();
        dispatch({type:'TOTAL_PRICE'})
        if(!isPresentInCart(value)) addToCart(value);
        if(isPresentInCart(value)) increment(value);
        setAddToCartClicked(true);
    }
    else{
        navigate('/auth');
    }
        
    }
   
    const addProductToWishlist=async(value)=>{
    if(isLoggedIn){
        await fetchWishlistData();
        addToWishlist(value)
        setAddToWishlistClicked(true);
    } else{
        navigate('/auth')
    }
       
    }
    const goToWishlist=()=>{
        navigate('/wishlist');
    }
  return (
    <div className="product-card">
            <h2>
                {title}
            </h2>
            <p>{author}</p>
            <p>{category}</p>
            <p>{price}</p>
            {
                addToCartClicked?
                <Button value={prod} onClickOperation={goToCart}>Go To Cart</Button>:
                <Button value={prod} onClickOperation={addProductToCart}>Add to Cart</Button>
                
            }
            {
                showAlertForCart && <AlertBox>"Added to Cart!"</AlertBox>
            }
            {
                addToWishlistClicked?
                <Button value={prod} onClickOperation={goToWishlist}>Go To Wishlist</Button>:
                <Button value={prod} onClickOperation={addProductToWishlist}>Add to Wishlist</Button>

            }
            {
                showAlertForWishlist && <AlertBox>Added to Wishlist!</AlertBox>
            }
           <Link to={'/products/'+id}>Visit Item</Link>
           
           </div>
  )
}

export default ProductCard