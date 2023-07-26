const WishListReducer=(wishListState,action)=>{
    switch(action.type){
        case 'SET_WISHLIST_DATA':
            return {
                ...wishListState,
                wishListData: action.payload
            }
        case 'ADD_TO_WISHLIST':
            const isProductPresent=wishListState.wishListData.wishlist.find(data=>data.id===action.payload.id)
            if(!isProductPresent){
                return {
                    ...wishListState,
                    wishListData:{
                        wishlist:[...wishListState.wishListData.wishlist,{...action.payload}]
                    }
                }
            }
            return "Product Already Present"

        case 'REMOVE_ITEM':
            return {
                ...wishListState,
                    wishListData:  {
                        wishlist: wishListState.wishListData.wishlist.filter(data=>data!==action.payload)
                }
            }


    }
    

}

export default WishListReducer