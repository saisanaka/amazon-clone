export const initialState = {
    basket : [],
    user : null,
}

export const getTotal = (basket) => 
    basket.reduce((amount , item) => item.price + amount , 0)


    
const reducer = (state , action) => {
    switch(action.type) {
        case 'EMPTY_BASKET' :
            return {
                ...state,
                basket: [],
            };
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket , action.item]
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'REMOVE':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        
        default :
            return state;
    }
}

export default reducer;