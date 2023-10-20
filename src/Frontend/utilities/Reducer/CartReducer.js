const cartReducer=(state,action)=>{
    switch(action.type){
        case 'SET_DATA':
            return {
                ...state,
                cartData: action.payload
            }
        case 'ADD_TO_CART':
            console.log(state);
            const isProductPresent=state?.cartData?.cart?.find(data=>data.id===action.payload.id)
            if(!isProductPresent){
                if(state.cartData.cart)
                return {
                    ...state,
                    cartData:{
                        cart:[...state.cartData.cart,{...action.payload,qty:1}]
                    }
                }
                else
                return {
                    ...state,
                    cartData:[]
            }
            }
            const updatedProducts=state?.cartData?.cart?.map(data=>{
                if(data.id===isProductPresent.id)
                    return {
                        ...data,
                        qty:data.qty+1
                    }

                return {
                    ...data
                }
            })
            return{
                ...state,
                cartData:{
                    cart:[...updatedProducts]}
            }

        case 'INCREMENT_ITEM_QTY':
            const incrementProducts=state?.cartData?.cart?.map(data=>{
                if(data.id===action.payload.id)
                    return {
                        ...data,
                        qty:data.qty+1
                    }

            return {
                ...data
            }
            })
            return{
                ...state,
                cartData:{
                    cart:[...incrementProducts]
                }
            }
        
            case 'DECREMENT_ITEM_QTY':
                const decrementProducts=state?.cartData?.cart?.map(data=>{
                    if(data.id===action.payload.id)
                    return {
                        ...data,
                        qty:data.qty-1
                    }

            return {
                ...data
            }
                })
                return{
                    ...state,
                    cartData:{
                        cart:[...decrementProducts]
                    }
                }
            
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartData:  {
                    cart: state?.cartData?.cart?.filter(data=>data!==action.payload)
                }
            }

        case 'TOTAL_PRICE':
            if(state.cartData.cart){
                const totalPrice=state?.cartData?.cart?.reduce((accumulator,current)=>{
                    accumulator+=(current.price*current.qty)
                    return accumulator
                },0)
                console.log(totalPrice)
                return {
                    ...state,
                    totalPrice:totalPrice
                };
            }
           return {
            ...state
           }

           case 'CART_TOTAL':
                const cartTotal=state?.cartData?.cart?.reduce((accumulator,current)=>{
                    accumulator+=current.qty
                    return accumulator
                },0)
                console.log(cartTotal);
                return {
                    ...state,
                    cartTotal:cartTotal
                }

        default:
            return state;
    }
}

export default cartReducer;