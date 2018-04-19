const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

let initialState = {
        cart: []   
}
export default function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TO_CART:
        return {
            ...state,
            cart: [...state.cart, {name: action.payload.name, price: action.payload.price}]
        };
        case REMOVE_FROM_CART:
        let newCart = state.cart.slice();
        newCart.splice(newCart.indexOf(action.index) , 1);
        return {
            cart: [...newCart]
        };
        default:
        return state;
    }
}

export function addToCart(e, product){
    e.preventDefault();
    // console.log(product);
    return{
        type: ADD_TO_CART,
        payload: product
    }
}

export function removeFromCart(product){
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}