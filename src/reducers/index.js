import { combineReducers } from 'redux';
import products from './ProductReducer';
import AddToCartReducer from './AddToCartReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  products: products,
  addToCart: AddToCartReducer,
  authData: AuthReducer
});
