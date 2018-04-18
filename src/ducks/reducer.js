const ADD_TO_CART = "ADD_TO_CART";

let initialState = {
        name: '',
        price: '',
        cart: []   
}
export default function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TO_CART:
        return {
            ...state,
            name: action.payload.name,
            price: action.payload.price,
            cart: [...state.cart, {name: action.payload.name, price: action.payload.price}]
        };
        default:
        return state;
    }
}

export function addToCart(e, product){
    e.preventDefault();
    console.log(product);
    return{
        type: ADD_TO_CART,
        payload: product
    }
}