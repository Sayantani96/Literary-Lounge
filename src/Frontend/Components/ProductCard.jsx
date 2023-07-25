import React, {useState,useContext} from 'react'
import Button from '../Components/Button';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../utilities/CartContext';
import { WishlistContext } from '../utilities/WishListContext';
import AlertBox from '../Components/AlertBox/AlertBox'

const ProductCard = ({title,author,category,price,prod,id}) => {

    const {addToCart,fetchData,isPresentInCart,increment,showAlertForCart}=useContext(CartContext);
    const {addToWishlist,fetchWishlistData}=useContext(WishlistContext);
    const [addToCartClicked, setAddToCartClicked] = useState(false);
    const [addToWishlistClicked, setAddToWishlistClicked] = useState(false);
    const navigate=useNavigate();
    const goToCart=()=>{
        navigate('/cart');
    }
    const addProductToCart=async (value)=>{
        await fetchData();
        if(!isPresentInCart(value)) addToCart(value);
        if(isPresentInCart(value)) increment(value);
        setAddToCartClicked(true);
    }
   
    const addProductToWishlist=async(value)=>{
        await fetchWishlistData();
        addToWishlist(value)
        setAddToWishlistClicked(true);
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
           <Link to={'/products/'+id}>Visit Item</Link>
           
           </div>
  )
}

export default ProductCard