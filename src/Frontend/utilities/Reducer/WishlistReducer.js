const WishListReducer=(wishListState,action)=>{
    switch(action.type){
        case 'SET_WISHLIST_DATA':
            return {
                ...wishListState,
                wishListData: action.payload
            }
        case 'ADD_TO_WISHLIST':
            const isProductPresent=wishListState?.wishListData?.wishlist?.find(data=>data.id===action.payload.id)
            if(!isProductPresent){
                if(wishListState.wishListData.wishlist)
                return {
                    ...wishListState,
                    wishListData:{
                        wishlist:[...wishListState.wishListData.wishlist,{...action.payload}]
                    }
                }
                else
                return {
                    ...wishListState,
                    wishListData:[]
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