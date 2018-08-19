const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

let initialState = {
  cart: [],
  name: "",
  email: "",
  auth0_id: ""
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image1,
            id: action.payload.product_id
          }
        ]
      };
    case REMOVE_FROM_CART:
      let newCart = state.cart.slice();
      newCart.splice(newCart.findIndex(e => e.id === action.payload), 1);
      return {
        cart: [...newCart]
      };
    case LOGIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        auth0_id: action.payload.auth0_id,
        cart: action.payload.cart
      };
    case LOGOUT:
      return {
        ...state,
        name: "",
        email: "",
        auth0_id: "",
        cart: []
      };
    default:
      return state;
  }
}

export function addToCart(e, product) {
  e.preventDefault();
  return {
    type: ADD_TO_CART,
    payload: product
  };
}

export function removeFromCart(product_id) {
  return {
    type: REMOVE_FROM_CART,
    payload: product_id
  };
}

export function login(userData) {
  return {
    type: LOGIN,
    payload: userData
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
