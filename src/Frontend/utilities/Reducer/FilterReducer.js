const filterReducer=(state,action)=>{
    switch(action.type){
        case 'SORT_BY_PRICE':
            const arrayToSort=[...action.payload.filteredData];
            console.log(arrayToSort);
            if(action.payload.order==='htl'){
                arrayToSort.sort((a, b) => b.price - a.price)
               
            }
            if(action.payload.order==='lth'){
                arrayToSort.sort((a,b)=>a.price-b.price)
            }
            return{
                ...state,
                filteredData:[...arrayToSort],
                order:action.payload.order
            }
    case 'SORT_BY_RATING':

const filteredByRatingSlider=action.payload.filteredData.filter(data=>
    data.rating>=action.payload.rating
)
console.log(filteredByRatingSlider);
return{
    ...state,
    filteredData:[...filteredByRatingSlider],
    rating:action.payload.rating
}
   case 'SORT_BY_CATEGORY':
    const filteredByCategory=action.payload.filteredData.filter(data=>
        data.categoryName===action.payload.categoryName
    )
    return{
        ...state,
        filteredData:[...filteredByCategory],
        categoryName:action.payload.categoryName
    }
    case 'FILTER_BY_SEARCH':
        const filteredDataBySearch=action.payload.filteredData.filter(data=>
            data.title.toLowerCase().includes(action.payload.searchText.toLowerCase())
            )
        return {
            ...state,
            filteredData:[...filteredDataBySearch]
        }

    case 'CLEAR_ALL':
        return{
            ...action.payload
        }
}
}

export default filterReducer