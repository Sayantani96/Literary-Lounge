import React, {useState,useContext} from 'react'
import Button from '../Components/Button';
import { useNavigate} from 'react-router-dom';
import { CartContext } from '../utilities/CartContext';
import { WishlistContext } from '../utilities/WishListContext';
import AlertBox from '../Components/AlertBox/AlertBox'
import { AuthContext } from '../utilities/AuthContext';
import LinkButton from '../Components/LinkButton/LinkButton'
import { ProductContext } from '../utilities/ProductContext';


const ProductCard = ({
    title,
    author,
    category,
    price,
    prod,
    id,
    image
}) => {

    const {
        state,
        addToCart,
        fetchData,
        isPresentInCart,
        increment,
        showAlertForCart,
        dispatch}=useContext(CartContext);
    const {
        wishListState,
        addToWishlist,
        fetchWishlistData,
        showAlertForWishlist}=useContext(WishlistContext);
    const {token}=useContext(AuthContext);
    const {getProductById}=useContext(ProductContext);
    const [addToCartClicked, setAddToCartClicked] = useState(false);
    const [addToWishlistClicked, setAddToWishlistClicked] = useState(false);
    const navigate=useNavigate();
    const goToCart=()=>{
        navigate('/cart');
    }
    const addProductToCart=async (value)=>{
    if(token){
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
    if(token){
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
    const visitBook=()=>{
        getProductById(id);
        navigate(`${id}`);
    }

  return (
    <div className="product-card">
        <img src={image} alt="book-pic" className="book-pic"/>
        <div className="book-desc">
            <h2>
                {title}
            </h2>
            <div className="book-details">
            <div>{author}</div>
            <div>{category}</div>
            <div>{price}/-</div>
            </div>
           
        </div>
            
            <div className="btn-section">
            {
                addToCartClicked?
                <Button value={prod} onClickOperation={goToCart}>Go To Cart</Button>:
                <Button value={prod} onClickOperation={addProductToCart}>Add to Cart</Button>
                
            }
            {
                showAlertForCart?
                state.cartData.cart?
                state.cartData.cart.length>0?
                 <AlertBox>Added to Cart!</AlertBox>:
                 <AlertBox>Error in Cart!</AlertBox>:
                 <AlertBox>Can't Add to Cart</AlertBox>:
                 ''
            }
            {
                addToWishlistClicked?
                <Button value={prod} onClickOperation={goToWishlist}>Go To Wishlist</Button>:
                <Button value={prod} onClickOperation={addProductToWishlist}>Add to Wishlist</Button>

            }
            </div>
           
            {
                showAlertForWishlist?
                wishListState.wishListData.wishlist?
                wishListState.wishListData.wishlist.length>0?
                <AlertBox>Added to Wishlist!</AlertBox>:
                <AlertBox>Error in Wishlist!</AlertBox>:
                <AlertBox>Can't Add to Wishlist</AlertBox>:
                ''
            }
           <LinkButton onClickOperation={visitBook}>Visit Item</LinkButton>
           
           </div>
  )
}

export default ProductCard