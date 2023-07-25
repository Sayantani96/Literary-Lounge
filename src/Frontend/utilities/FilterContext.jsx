import { createContext, useContext, useReducer } from "react";
import filterReducer from "./Reducer/FilterReducer";
import { ProductContext } from "./ProductContext";




export const FilterContext=createContext();



const initialState={
    filteredData:[],
    order:'',
    categoryName:'',
    searchText:'',
    rating:0
}



export const FilterContextProvider=({children})=>{

    const [state,dispatch]=useReducer(filterReducer,initialState);
    const {productData}=useContext(ProductContext);

    console.log(state.filteredData);

    const sortProductsByPrice=(order)=>{
        dispatch({type:'SORT_BY_PRICE',payload:{
            ...state,
            filteredData:state.filteredData.length>0?state.filteredData:productData.products,
            order:order
        }})
    }
    
    const sortProductsByCategories=(categoryName)=>{
        dispatch({type:'SORT_BY_CATEGORY',payload:{
            ...state,
            filteredData:state.filteredData.length>0?state.filteredData:productData.products,
            categoryName:categoryName
        }})
    }

    const filterProductsBySearch=(products,searchText)=>{
        dispatch({type:'FILTER_BY_SEARCH',payload:{
            ...state,
            filteredData:products,
            searchText:searchText
        }})
    }
    const slideFilterByRating=(ratingValue)=>{
        dispatch({type:'SORT_BY_RATING',payload:{
            ...state,
            filteredData:state.filteredData.length>0?state.filteredData:productData.products,
            rating:ratingValue
        }})
    }

    const clearTheFilters=()=>{
        dispatch({type:'CLEAR_ALL',payload:{
            ...initialState,
        }})
    }
    const value={state,sortProductsByPrice,sortProductsByCategories,filterProductsBySearch,
        slideFilterByRating,
        clearTheFilters
    };
    
    return (
        <FilterContext.Provider value={value}>
          {children}
        </FilterContext.Provider>
      );
}




