import {
  COUNTER,
  ADD_TO_NEW_CART,
  MODIFY_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART
} from './types';

export const cartCount = (num) => {
  return {
    type: COUNTER,
    payload: num
  }
}

export const addFoodToCart = (food) =>{
  return {
    type: ADD_TO_NEW_CART,
    payload: food
  }
}

export const modifyCart = ({index, num}) => {
    return {
      type: MODIFY_CART,
      payload: ({index, num})
    }
}

export const removeFromCart = ({ cart, cartCounter }) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { cart, cartCounter }
  }
}

export const removeAllFromCart = () => {
  return {
    type: REMOVE_ALL_FROM_CART
  }
}
