const cartReducer=(state,action)=>{
    switch(action.type){
        case 'SET_DATA':
            return {
                ...state,
                cartData: action.payload
            }
        case 'ADD_TO_CART':
            console.log(state);
            const isProductPresent=state.cartData.cart.find(data=>data.id===action.payload.id)
            if(!isProductPresent){
                return {
                    ...state,
                    cartData:{
                        cart:[...state.cartData.cart,{...action.payload,qty:1}]
                    }
                }
            }
            const updatedProducts=state.cartData.cart.map(data=>{
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
            const incrementProducts=state.cartData.cart.map(data=>{
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
                const decrementProducts=state.cartData.cart.map(data=>{
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
                    cart: state.cartData.cart.filter(data=>data!==action.payload)
                }
            }

        case 'TOTAL_PRICE':
            let totalPrice=0;
            if(state.cartData.cart){
                totalPrice=state.cartData.cart.reduce((accumulator,current)=>{
                    accumulator+=(current.price*current.qty)
                    return accumulator
                },0)
                return {
                    ...state,
                    totalPrice:totalPrice
                };
            }
           return {
            ...state
           }
            

        default:
            return state;
    }
}

export default cartReducer;