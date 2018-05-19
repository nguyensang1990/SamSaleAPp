import update from 'immutability-helper';

import {
  COUNTER,
  ADD_TO_NEW_CART,
  MODIFY_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  LOG_OUT
} from '../actions/types';

const INITIAL_STATE = {
  cartCounter: 0,
  cart: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER:
      return { ...state, cartCounter: action.payload };
    case ADD_TO_NEW_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case MODIFY_CART:
      return update(state, {
        cart: {
          [action.payload.index]: {
            num: { $set: action.payload.num }
          }
        }
      });

    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload.cart, cartCounter: action.payload.cartCounter };
    case REMOVE_ALL_FROM_CART:
      return { ...state, cart: [], cartCounter: 0 };
    case LOG_OUT:
      return INITIAL_STATE;

    default: return state;
  }
};

// update(state, {
//   cart: {
//     [action.payload.index]:{
//       num: {$set: action.payload.num}
//     }
//   }
// })
